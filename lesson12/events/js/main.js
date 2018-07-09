

var button = document.querySelectorAll('button')[0];

button.addEventListener('click', buttonClick);


function buttonClick() {
    var firstInput = document.querySelectorAll('input')[0];
    var secondInput = document.querySelectorAll('input')[1];

    var x = Number(firstInput.value);
    var y = Number(secondInput.value);


    var resultLabel = document.querySelectorAll('span')[0];
    resultLabel.innerText = (x + y);
}