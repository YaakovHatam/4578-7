 // Best practice
 const events = {
    click: 'click',
    blur: 'blur'
}


document.getElementById('b1').addEventListener(events.click, buttonClick);

function buttonClick() {
    console.log('button clicked');
}

document.getElementById('b1').addEventListener('click', function() {
    console.log('button clicked');
});
