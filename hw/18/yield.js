// enumerator

function* h(n) {
    for (let i=0; i < n; i++) {
        yield i;
    }
}

var result = h(10);
do {
    var n = result.next();
    console.log(n.value)
} while (!n.done)