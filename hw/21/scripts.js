(function(num) {
    for (let i=0; i < num; i ++) {
        document.getElementById('a').innerHTML += (`
        <div class='box'>
            <input type="checkbox" data-id=${i}>
        </div>`);
    }
}(20));

const cbArray = document.querySelectorAll('input[type="checkbox"]');
for (let i=0; i < cbArray.length; i++) {
    cbArray[i].addEventListener('click', function() {
        console.log(this.checked);
        console.log(this.dataset)
    })
}

// Design observer that takes random number from 0 to num, and if the checkbox is checked make the BGcolor green