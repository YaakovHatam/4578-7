/*
const students = []; //new array();
students.push(new Student('stuent a', 22));
students.push(new Student('stuent b', 26));
students.push(new Student('stuent c', 32));
students.push(new Student('stuent d', 38));

// function ctor
function Student(name, age) {
    this.name = name;
    this.age = age;
}
*/
let url = 'data.json';
const promise = fetch(url).then(res => res.json()).then((out) => {
    prepareHtml(out);
}).catch(err => { throw err });

function prepareHtml(students) {
    for (let i = 0; i < students.length; i++) {
        let temp = makeStudentHtml(students[i]);
        document.getElementById('content').innerHTML += temp;
    }

    function makeStudentHtml(student) {
        const studentTemplate = '<div><h2>{{studentName}}</h2><span>{{studentAge}}</span></div>'
        let temp = studentTemplate;
        temp = temp.replace('{{studentName}}', student.name);
        temp = temp.replace('{{studentAge}}', student.age);
        return temp;
    }
}