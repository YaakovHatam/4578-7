var cash = {
    denom : [],
    bills: [0, 0, 0],
    addBills: function(bills) { //add bills to the ATM
        
    },
    canDispense: function(sum) { //if ATM have enough to dispense the sum
        for (var i=this.denom.length-1; i  >= 0; i--) {
            sum -= Math.min(sum/this.denom[i], this.bills[i]) *
                this.denom[i];
        }
        return sum == 0;
    },
    dispense: function(sum) { // check if can dispense, if so call putout
        var give = [];
        
        
        
        
        this.putout(give);
    },
    putout: function(give) { //dispense the bills out 
        
    },
    cashBalance: function() { //how much money left in ATM
        
    }
}

cash.denom = [50, 100, 200];
cash.addBills([4, 1, 3]);
console.log(cash.dispense(1000));
