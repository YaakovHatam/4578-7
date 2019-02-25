const coins = [
    'bitcoin',
    'ethereum',
    'ripple',
    'tron'
];

function coinRequest(coin, callback) {
    function reqListener() {
        const res = JSON.parse(this.responseText);
        callback(res);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://api.coingecko.com/api/v3/coins/"+coin);
    oReq.send();
}

function start() {
    for (let i=0; i < coins.length; i++) {
        coinRequest(coins[i], function(coinData) {
            document.getElementById('coinsData').innerHTML +=
                '<div>' + coinData.id + ', symbol: ' + coinData.symbol + '</div>';
        });
    }
}
start();