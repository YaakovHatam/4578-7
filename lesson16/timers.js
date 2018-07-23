setTimeout(function() {
    alert('buy now!');
}, 3 * 1000) // 3sec

let i=1;

var intervalNumber1 = setInterval(function() {
    console.log(intervalNumber1 + ': ' + i++);
    
    if (i > 10)
        clearInterval(intervalNumber1);
}, 1 * 1000) // every 3sec

var intervalNumber2 = setInterval(function() {
    console.log(intervalNumber2 + ': ' + i++);
    
    if (i > 10)
        clearInterval(intervalNumber2);
}, 1 * 1000) // every 3sec