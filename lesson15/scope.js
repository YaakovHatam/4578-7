// Only function define scope!!!

var x = 100; //global scope

function h() {
    var y = 100; // h() scope
    console.log(x) // Lexical scope


    // BAD PRACTICE
    window.z = y * 8;;
    x = 50;
}

function h1() {
    if (true) {
        let y1 = 50; // Only curly brackets "scope"
    }

    console.log(y1);
}


// another let example
{
    let z = 50; // Only curly brackets "scope"
	console.log(z);
}
console.log(z);


// const
{
    const MAX_STUDENTS_IN_CLASS = 50; // Only curly brackets "scope"
    MAX_STUDENTS_IN_CLASS = 100;
	console.log(MAX_STUDENTS_IN_CLASS);
}
console.log(MAX_STUDENTS_IN_CLASS);