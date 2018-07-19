/*
var twoDimArray = [
    [
        "{i: 0, j: 0}",
        "{i: 0, j: 1}",
        "{i: 0, j: 2}",
    ],
    [
        "{i: 1, j: 0}",
        "{i: 1, j: 1}",
        "{i: 1, j: 2}"
    ],
    [
        "{i: 2, j: 0}",
        "{i: 2, j: 1}",
        "{i: 2, j: 2}"
    ]
]
*/
var timeTable = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9]
]

// Make matrix NxN with 0 on all cells and 1 on the diagonals
var MATRIX_SIZE = 10;
var matrix = [];
for (var i=0; i < MATRIX_SIZE; i++) {
    matrix[i] = [];
    for (var j=0; j < MATRIX_SIZE; j++) {
        // matrix[i].push(0);
        matrix[i][j] = 0;
        if (i == j || (i+j) == (MATRIX_SIZE-1))
            matrix[i][j] = "1";
    }
}
console.log(matrix);


/*  */
var MATRIX_SIZE = 10;
var matrix = [];
for (var i=0; i < MATRIX_SIZE; i++) {
    matrix[i] = [];
    for (var j=0; j < MATRIX_SIZE; j++) {
        matrix[i][j] = Math.floor(Math.random()*100);
    }
}
console.log(matrix);
var maxSum = 0;
var maxSumRowIndex = -1;

for (var i=0; i < MATRIX_SIZE; i++) {
    var sum = 0;
    for (var j=0; j < MATRIX_SIZE; j++) {
        sum += matrix[i][j];
    }
    if (sum > maxSum) {
        maxSum = sum;
        maxSumRowIndex = i;
    }
}
console.log(maxSumRowIndex + " : sum of " + maxSum);


