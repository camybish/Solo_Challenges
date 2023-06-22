class Bank {
    constructor () {
        this.balance = 0;
        this.transactions = [];
    }

    transaction(amount, yearOrNow, month = null, day = null) {
        if (amount != 0 && typeof !isNaN(amount)) {
            return this.saveTransaction(amount, yearOrNow, month = null, day = null);
        } else {
            return `Please enter a valid amount to deposit`;
        }
    }

    saveTransaction(amount, yearOrNow, month = null, day = null) {
        (amount > 0 ? this.balance += amount : this.balance -= amount);
        if(Number.isInteger(yearOrNow)) {
            this.transactions.push({ DOT: [yearOrNow, month, day], moneyDiff : amount, balance : this.balance })
        } else {
            this.transactions.push({ DOT: "today", moneyDiff : amount, balance : this.balance })
        }
        return `Successfully deposited £${amount}`
    }

}

module.exports = Bank;