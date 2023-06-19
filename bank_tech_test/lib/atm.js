class ATM {
    constructor() {
        this.balance = 0;
        this.transactions = [];
    }

    deposit (amount, date) {
        if (amount >= 0 && typeof !isNaN(amount) ) {
            this.balance += amount;
            this.transactions.push({ DOT: date, credit : amount, balance : this.balance })

            return `Successfully deposited £${amount}`
        } else {
            return `Please enter a valid amount to deposit`;
        }
    }
    withdraw (amount, date) {
        if (amount >= 0 && typeof !isNaN(amount) ) {
            this.balance -= amount;
            this.transactions.push({ DOT : date, debit : amount, balance : this.balance })
            return `Successfully withdrawn £${amount}`;
        } else {
            return `Please enter a valid amount to withdraw`
        }
    }

    checkBalance () {
        return this.balance;
    }

    checkTransactions() {
        return (this.transactions);
    }

    printStatement () {
        return this.transactions.forEach(this.formatStatement())
    }

    formatStatement () {
        return `${this.transactions[0].DOT} || ${this.transactions[0].credit} || ${this.transactions[0].debit} || ${this.transactions[0].balance}`
    }
    
}

module.exports = ATM;

/*
return (
    `${this.dates[0]} || ${this.transaction[0].toFixed(2)} || ${this.currentBalance[0].toFixed(2)}`
)
*/