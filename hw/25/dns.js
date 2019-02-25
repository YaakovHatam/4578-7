const dns = require('dns');

dns.resolve4('walla.co.il', function(err, d) {
    if (err) {
        console.log(err)
    } else {
      console.log(d);
    }
})
