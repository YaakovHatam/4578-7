var balance = 100.0; //set initial balance.
var acceptedBills = [20, 50, 100, 200];

function get_balance() {
    
}
function make_deposit() {
   
}
function make_withdrawal() {
  
}
function error() {
    
}
function exit() {
   
}
function atm() {
    var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit')); //prompt user for choice.
    if (choice === 1) {
        get_balance();
    } else if (choice === 2) {
        make_deposit();
    } else if (choice === 3) {
        make_withdrawal();
    } else if (choice === 4) {
        exit();
    } else {
        error();
    }
}
atm();