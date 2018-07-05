// pass array as paramter to function
function test(arr, num) {
    if (Array.isArray(arr)) {
        console.log('arr is array!');
    }
}

var myArray = [1, 2, 3, 4];
test(myArray, 7);
test([1, 2, 3, 4], 7);

// Break a loop
var i = 0;
while (true) {

    if (i === 100)
        break;
    console.log(i++);
}

// OR
var cond1 = false;
var cond2 = true;
if (cond1 || cond2) {
    console.log('one of em is true');
}

var cond3 = true;
var cond4 = true;
// AND
if (cond3 && cond4) {
    console.log('BOTH of em is true');
}


// Complex OR / AND
if (cond1 && cond2 || cond3) {
    console.log('true');
}

if (cond1 && (cond2 || cond3)) {
    console.log('false');
}

// NOT
if (!true) {
    console.log('true');
}

if (!false) {
    console.log('false');
}

if (!(cond1 && (cond2 || cond3))) {
    console.log('false');
}

// Sorting
var nonSortedArray = [1, 67, 34, 2345, 78, 34, 54, 23, , 5, 1, 5, 8, 90];
function sortNumber(a,b) {
    console.log('a: ' + a + ' b: ' + b)
    return a - b;
}
nonSortedArray.sort(sortNumber);

/* Sort list:
    - quick sort
    - bubble sort
    - Counting sort
*/

var sortedArray = [];
var num = 722;
for(var i=0; i < 1000; i++) {
    sortedArray.push(i+1);
}

// Greedy algorithm
for(var k=0; k < sortedArray.length; k++) {
    console.log('loop run');
    if (sortedArray[k] === num) {
        console.log(k);
        break;
    }
}

// With sorting (Binary search)
function findIndex(sortedArray, num) {
    var mid = Math.floor(sortedArray.length/2);
    var start = 0;
    var end = sortedArray.length - 1;

    while (start < end) {
        console.log('loop run');
        if (sortedArray[mid] > num) {
            end = mid;
            mid = Math.floor((start+end)/2);
        } else if (sortedArray[mid] < num) {
            start = mid;
            mid = Math.floor((start+end)/2);
        }
        else if (sortedArray[mid] == num) {
            return mid;
        }
    }
}