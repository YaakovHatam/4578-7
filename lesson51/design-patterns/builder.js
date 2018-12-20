function BuildPerson() {
    var _person = new Person();

    function addName(name) {
        _person.name = name;
    }

    function addAge(age) {
        _person.age = age;
    }

    function build() {
        var p = _person;
        _person = new Person();
        return p;
    }

    return {
        addName: addName,
        addAge: addAge,
        build: build
    }
}

var p = new Person('student', 21)

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = BuildPerson();
p1.addName(prompt('What is your name?'));
p1.addAge(Number(prompt('What is your age?')));

document.body.innerHTML += JSON.stringify(p1.build());