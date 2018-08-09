for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000)
}

for (let j=0; j < 5; j++) {
    setTimeout(function () {
        console.log(j);
    }, i * 1000)
}