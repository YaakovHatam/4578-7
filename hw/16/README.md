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



api key: `e06a2f3d21ca934dc5a82ff8ba8ec0d8`
