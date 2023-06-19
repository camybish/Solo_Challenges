const fs = require("fs");

class ATM {
    constructor() {
        this.balance = 0;

    }

    deposit (amount, date) {
        if (amount >= 0 && typeof !isNaN(amount) ) {
            this.balance += amount;

            return `Successfully deposited £${amount}`
        } else {
            return `Please enter a valid amount to deposit`;
        }
    }
    withdraw (amount, date) {
        if (amount >= 0 && typeof !isNaN(amount) ) {
            this.balance -= amount;

            return `Successfully withdrawn £${amount}`;
        } else {
            return `Please enter a valid amount to withdraw`
        }
    }

    checkBalance () {
        return this.balance;
    }
    
}

module.exports = ATM;

/*
return (
    `${this.dates[0]} || ${this.transaction[0].toFixed(2)} || ${this.currentBalance[0].toFixed(2)}`
)
*/