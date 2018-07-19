// page 54 exercise 4
(function () {
    function frame(num) {
        num = num * 2 - 1;
        let array = []
        let currentNum = 0;

        while (currentNum <= Math.floor(num / 2)) {

            for (let i = currentNum; i < num - currentNum; i++) {
                if (!array[i])
                    array[i] = [];
                
                for (let j = currentNum; j < num - currentNum; j++) {
                    array[i][j] = (currentNum + 1);
                }
            }
            currentNum++;
        }

        return array;
    }


    const num = Math.floor(Math.random() * 10);
    // frame(num);
    console.log(frame(6));
 }());


 // page 38 exercise 12
 function Employee(name, payrolls) {
     if (!Array.isArray(payrolls)) {
         // error
     }
     this.name = name;
     this.payrolls = payrolls;
 }

 /* generate array of payrolls automatic */
const salaries = [];
for (let i=0; i < 12; i++) {
    salaries.push( (5000 + Math.random()*5000).toFixed(2) );
}

// worker1 for example
const worker1 = new Employee('worker1', salaries);


 function getMaxSalaryOfEmployee(employee) {
    let highSalaryMonth = 0;

     for (let i=1; i < employee.payrolls.length; i++) {
         if (employee.payrolls[i] > employee.payrolls[highSalaryMonth]) {
            highSalaryMonth = i;
         }
     }
     return highSalaryMonth;
 }
 getMaxSalaryOfEmployee(worker1);

 /* TODO: for 200 workers

 const workersArray = [];
 for(let k=0; k < 200; k++) {
    const salaries = [];
    for (let i=0; i < 12; i++) {
       salaries.push( (5000 + Math.random()*5000).toFixed(2) )
    }
    workersArray.push(new Employee('worker' + k, salaries))
 }

function getMaxSalaryOfAllEmployees(workersArray) {
    let highSalaryEmployeeIndex = 0;
    let highSalaryEmployee = workersArray[highSalaryEmployeeIndex];

    for (let i=1; i < workersArray.length; i++) {
        let maxSalaryMonthIndex = getMaxSalaryOfEmployee(workersArray[i]);
        if (workersArray[i].payrolls[maxSalaryMonthIndex] > highSalaryEmployee)
    }
}
*/