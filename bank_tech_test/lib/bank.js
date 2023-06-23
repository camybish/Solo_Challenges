class Bank {
    constructor () {
        this.balance = 0;
        this.transactions = [];
    }

    transaction(amount, yearOrNow, month = null, day = null) {
        if (amount != 0 && typeof !isNaN(amount)) {
            return this.saveTransaction(amount, yearOrNow, month, day);
        } else {
            return `Please enter a valid amount to deposit or withdraw`;
        }
    }

    saveTransaction(amount, yearOrNow, month = null, day = null) {
        this.balance += amount
        if(Number.isInteger(yearOrNow)) {
            this.transactions.push({ DOT: [yearOrNow, month, day], moneyDiff : amount, balance : this.balance })
        } else {
            this.transactions.push({ DOT: "today", moneyDiff : amount, balance : this.balance })
        }
        return `Successfully ${(amount > 0 ? "deposited" : "withdrew")} £${Math.abs(amount)}`
    }

}

module.exports = Bank;