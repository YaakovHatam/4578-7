var obj = {
    a: 1,
    b: 2,
    c: true
};

function copyObj(o) {
    const obj = {};
    for(let prop in o) {
        obj[prop] = o[prop];
    }

    return obj;
}

function changeSomething(o) {
    o.c = false;
}

// by reference
changeSomething(obj);
changeSomething({...obj});
// changeSomething(copyObj(obj));

console.log(obj)