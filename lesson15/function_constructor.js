var person1 = {
    name: 'thename',
    age: 21,
    eyeColor: 'brown'
}

// function constructor
function Person(name, age, eyeColor) {
    if (typeof name !== 'string') {
        console.log('error');
    }
    this.name = name;
    this.age = age;
    this.eyeColor = eyeColor;
}

var pArray = [];
for (let i=0; i < 10; i++) {
    pArray.push(new Person('thename'+i, 20+i, 'brown'));
}