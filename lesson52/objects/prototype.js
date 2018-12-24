function Person() {

}
function Student() {

}

function Lecturer() {

}

var l1 = Object.create(o);
Person.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
  };