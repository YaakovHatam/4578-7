// callback
function h(callback) {
    setTimeout(() => { callback(1) }, 1000)
}

h(function(n) { 
    console.log(n);
})

// promise version
function h() {
    return new Promise((rs, rj) => {
        setTimeout(() => { rs(1) }, 1000)
    })
}

// promise invoke - async call
h().then(function(n) { 
    console.log(n);
})

// promise invoke - "sync" call
async function callTo() {
    await h().then(function(n) { 
        console.log(n);
    })
}