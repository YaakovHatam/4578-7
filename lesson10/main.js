var n = 20;

/* ex3 */
var i =0 ;
while (i <= 100) {
	if (i%2==0) {
		console.log(i);
    }
	i++;
}

/* ex4 */
var i = 0;
var sum = 0;
while (i < n) {
    sum = sum + i;
    i++;
}

/* ex5 */
for(var i=1; i <= 10; i++) {
    var row = '';
    for(var j=1; j <= 10; j++) {
        row = row + (i * j) + ' ';
    }
    console.log(row);
}

/* ex6 */
var num = 12345;
var reversedNumber = 0
var remainder;

while(num > 0)
{
    remainder = num % 10;
    reversedNumber = reversedNumber*10 + remainder;
    num /= 10;
    num = Math.floor(num);
}
console.log(reversedNumber);

/* ex7 */



/* ex9 */
var num = 6;
var factorial = 1;
for(var i=num; i > 0; i--) {
    factorial = factorial * i;
}
console.log(factorial);

