
function calculate(x, y, op) {
    console.log('op ' + op + " of " + x + " and " + y + " is:")
    
    switch (op) {
        case '+':
            console.log(add(x, y));
            break;
        case '-':
            console.log(subtract(x, y));
            break;
        case '*':
            console.log(multiply(x, y));
            break;
        case '/':
            console.log(division(x, y));
            break;
        default:
            console.error('op in not ok');
    }
}


/*
function calculate(x, y, op) {
    console.log('op ' + op + " of " + x + " and " + y + " is:")
    if (op === '+') {
        console.log(add(x, y));
    } else if (op === '-') {
        console.log(subtract(x, y));
    } else if (op === '*') {
        console.log(multiply(x, y));
    } else if (op === '/') {
        console.log(division(x, y));
    } else {
        console.error('op in not ok');
    }
}
*/

function add(x, y) {
    if (checkNumbers(x, y)) {
        return x + y;
    }
}

function subtract(x, y) {
    if (checkNumbers(x, y)) {
        return x - y;
    }
}

function multiply(x, y) {
    if (checkNumbers(x, y)) {
        return x * y;
    }
}

function division(x, y) {
    if (checkNumbers(x, y)) {

        // Shortand if
        return y == 0 ? null : x / y;

        /*
        if ( y == 0) {
            console.log('Cannot divide by zero');
            return null;
        } else {
            return x / y;
        }
        */
        
    }
}

function checkNumbers(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return true;
    }

    console.log('x or y is not a number');
    return false;

    // Unreachable code
    
}