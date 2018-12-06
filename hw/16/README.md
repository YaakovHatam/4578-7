# Consume API

https://openweathermap.org/api


get to `Current weather data`

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
