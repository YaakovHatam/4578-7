const coins = [
    'bitcoin',
    'ethereum',
    'ripple',
    'tron'
];

function coinRequest(coin) {
    return new Promise((resolve, reject) => {
        function reqListener() {
            const res = JSON.parse(this.responseText);
            resolve(res);
        }

        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", reqListener);
        oReq.open("GET", "https://api.coingecko.com/api/v3/coins/" + coin);
        oReq.send();
    }); 
}

async function start() {
    for (let i = 0; i < coins.length; i++) {
        await coinRequest(coins[i]).then(function (coinData) {
            document.getElementById('coinsData').innerHTML +=
                '<div>' + coinData.id + ', symbol: ' + coinData.symbol + '</div>';
        });
    }
}
start();