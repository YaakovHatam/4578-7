const stocksArray = [
    {
        symbol: 'FB',
        elemid: 'facebook'
    },
    {
        symbol: 'AAPL',
        elemid: 'apple'
    },
    {
        symbol: 'AMZN',
        elemid: 'amazon'
    },
    {
        symbol: 'NFLX',
        elemid: 'netflix'
    },
    {
        symbol: 'GOOG',
        elemid: 'google'
    }
];

for (let i = 0; i < stocksArray.length; i++) {
    $('#stocks').append("<div class='col-2 text-white' id='" + stocksArray[i].elemid + "'></div>")
}
setInterval(getData, 5 * 60 * 1000);
getData();

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

