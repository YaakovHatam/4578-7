// recursion
function factorial(num) { // 5! = 5 * 4 * 3 * 2 * 1
    var sum = 1;
    for(var i=num; i > 0; i--)
        sum *= i;

    return sum;
}

function factorialRecursion(num) {
    if (num == 0) {
        return 1;
    }
    return factorialRecursion(num-1) * num;
}


function x(num) {
    if (num === 1)
        return 1;
    return x(num -1) + " " + num;
}

function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  