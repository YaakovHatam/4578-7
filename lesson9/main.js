var MAX_STUDENTS_IN_CLASS = 20;

/*
var userAge;
userAge = 20;

// 2 way flow control
if (userAge < 10) {
    alert('Allowed');
} else {
    alert('go away');
}
*/

/*
//3nth way flow control
var userAge;
userAge = 20;

if (userAge < 10) {
    alert('Small swimming pool');
} else if (userAge < 17) {
    alert('Medium swimming pool');
} else {
    alert('Large swimming pool');
}
*/

var answer;

answer = prompt("Where did you come from?")

// alert("I'm happy to see that you are from " + answer);
document.getElementById('h').innerText = "I'm happy to see that you are from " + answer;


/* commemnts */
/*
    Multi line comment
    Multi line comment
    Multi line comment
    Multi line comment
*/

// Single line comment


var myObj = {
    age: 18,
    name: "student",
    isMarried: false //CAML-case
}

myObj.email = 'student@gmail.com';
/*
myObj.age = prompt('your age');

if (myObj.age < 10) {
    alert('Small swimming pool');
} else if (myObj.age < 17) {
    alert('Medium swimming pool');
} else {
    alert('Large swimming pool');
}
*/
// MAX_STUDENTS_IN_CLASS = 34 // BAD!!!
console.log(myObj.age);
console.log(myObj["age"]);

delete myObj.age;

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

console.log('********* WHILE LOOP ***********');
var x = 0;
var num = prompt('enter a number');
while (x < num) {
    x++;
    console.log(x);
}


console.log('********* DO WHILE LOOP ***********');
var x = 0;
do {
    var age = prompt('What is your age?');
    var age = Number(age);
} while(Number.isNaN(age))


console.log('********* FOR LOOP ***********');
var x = 0;
var num = prompt('enter a number');
while (x < num) {
    x++;
    console.log(x);
}

var num = prompt('enter a number');
for(var x=1; x <= num; x++) {
    console.log(x);
}



/************* FIZZ BUZZ *********** */

var randomNumber = Math.random();
randomNumber = randomNumber * 5;
randomNumber = Math.ceil(randomNumber);

if (randomNumber == 3) {
    console.log('fizz');
} else if (randomNumber == 5) {
    console.log('buzz');
} else {
    console.log(randomNumber);
}