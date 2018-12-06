# Consume API

https://openweathermap.org/api


get to api doc: Current weather data

```javascript
 $.ajax({
      url: apiUrl,
      method: 'GET'
  }).done(function (d) {
      if (typeof d === 'string')
          d = JSON.parse(d);
      console.log(d);

  });
```

## Mission
- use `bootstrap`
- create dropdown with city names
- create a button
- after selecting city name and clicking "show weather" make api call and show the wather on the screen

api key: `e06a2f3d21ca934dc5a82ff8ba8ec0d8`
