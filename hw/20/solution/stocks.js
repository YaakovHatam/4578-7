function stockObserver(min) {
    const stocks = [];

    function getName() {
        return min + ' minutes';
    }

    function getId() {
        return min;
    }

    function subscribe(stock) {
        stocks.push(stock);

    }

    function unsubscribe(stock) {}

    function notify() {
        setInterval(function() {
            for(let i=0; i < stocks.length; i++) {
                getStock(stocks[i].symbol, function(d) {
                    stocks[i].notifyStock(d);
                })
               
            }
        }, min * 60 * 1000);
      
    }

    return {
        subscribe: subscribe,
        unsubscribe: unsubscribe,
        notify:notify,
        getName: getName,
        getId: getId
    }
}

const stocksArray = [
    new Stock('FB'),
    new Stock('AAPL'),
    new Stock('AMZN'),
    new Stock('NFLX'),
    new Stock('GOOG')
];

function Stock(symbol) {
    this.symbol = symbol;
    this.elementId = symbol;
    this.price = null;
    this.lastPrice = null;
}

Stock.prototype.notifyStock = function(d) {
    console.log(d);
    // Update view
}

const observersArray = [
    stockObserver(5),
    stockObserver(1)
];

function buildHtml(stocksArray) {
    let cbs = '';
    for (let i = 0; i < stocksArray.length; i++) {
        $('#stocks').append(`
            <section class='col-2'>
                <h2>${stocksArray[i].symbol}</h2>
                <div id='${stocksArray[i].symbol}'></div>
            </section>
        `);

        cbs += (`
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" data-stock-id='${stocksArray[i].symbol}'>
                <label class="form-check-label">
                    ${stocksArray[i].symbol}
                </label>
            </div>
        `)
    }

    for(let i=0; i < observersArray.length; i++) {
        $('#checkboxes').append(`
            <h2>${observersArray[i].getName()}</h2>
            <div data-observer-id=${observersArray[i].getId()}>${cbs}</div>
        `)
    }
}
buildHtml(stocksArray);

function getData() {
    for (let i = 0; i < stocksArray.length; i++) {
        getStock(stocksArray[i].symbol, function (arr) {
            const fb = arr;
            let success = (Number(fb[0]['4. close']) - Number(fb[1]['4. close'])) > 0;
            document.getElementById(stocksArray[i].elemid).innerHTML = fb[0]['4. close'];
            $('#' + stocksArray[i].elemid).addClass(success ? 'bg-success' : 'bg-danger');
        });
    }
}

function getStock(symbol, callback) {
    // let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + symbol + '&interval=5min&apikey=I2CEA84LAJMTIAHE';
    let url = 'demo.json';
    $.ajax(url)
        .done(function (d) {

            let arr = [];
            for (let prop in d['Time Series (5min)']) {
                d['Time Series (5min)'][prop].time = new Date(prop);
                arr.push(d['Time Series (5min)'][prop]);
            }
            arr.reverse();

            callback(arr);
        });
}
