function Student(name) {
	this.name = name;
}

function h(st) {
	st.name = st.name[0].toUpperCase() + st.name.slice(1, st.name.length);
}


var s1 = new Student('student1');
var s2 = new Student('Student2');
var s3 = new Student('33sdf');

h(s1);
h(s2);
h(s3);

console.log(s1.name === 'Student1');
console.log(s2.name === 'Student2');
console.log(s3.name === '33sdf');