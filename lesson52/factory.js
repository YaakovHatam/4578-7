function Person() {}

function Student() {}

function Lecturer() {}

function factory(type) {
    switch (type) {
        case 'student':
            return new Student();
        case 'lecturer':
            return new Lecturer();
        case 'person':
            return new Person();
    }
}

var p1 = factory('person');