function timesTable() {
    for (var i = 1; i <= 10; i++) {
        var row = '';
        for (var j = 1; j <= 10; j++) {
            row = row + (i * j) + ' ';
        }
        console.log(row);
    }
}

function timesTable(n) {
    for (var i = 1; i <= n; i++) {
        var row = '';
        for (var j = 1; j <= n; j++) {
            row = row + (i * j) + ' ';
        }
        console.log(row);
    }
}
timesTable(10);

function timesTable(min, n) {
    for (var i = min; i <= n; i++) {
        var row = '';
        for (var j = min; j <= n; j++) {
            row = row + (i * j) + ' ';
        }
        console.log(row);
    }
}

timesTable(3, 10);


function factorial(num) {
    var fact = 1;
    for(var i=num; i > 0; i--) {
        fact = fact * i;
    }
    return fact;

}
var x = factorial(5);
alert(x);