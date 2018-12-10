https://www.alphavantage.co

https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=fb&interval=5min&apikey=


## Stocks symbols
FB, AMZN, AAPL, NFLX, GOOG 

## Steps
- Open a new project (vsocde)
- add bootstrap via npm (`npm i bootstrap`)
- Add jquery via npm (`npm i jquery`)
- Design your html
- get API key from https://www.alphavantage.co
- use the api endpoint https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=fb&interval=5min&apikey= to get stocks data



##
```javascript
 let arr = [];
            for(let prop in d['Time Series (5min)']) {
                d['Time Series (5min)'][prop].time = new Date(prop);
                
                arr.push(d['Time Series (5min)'][prop]);
            }
            arr.reverse();

            console.log(arr[arr.length - 1]['4. close']);
            console.log(arr[arr.length - 2]['4. close']);
```
