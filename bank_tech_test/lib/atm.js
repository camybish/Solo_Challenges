const { statement } = require("@babel/template");

class ATM {
    constructor() {
        this.balance = 0;
        this.transactions = [];
        this.tRow = [];
    }

    deposit (amount, year, month, day) {
        if (amount >= 0 && typeof !isNaN(amount)) {
            return this.saveDepost(amount, year, month, day);
        } else {
            return `Please enter a valid amount to deposit`;
        }
    }
    withdraw (amount, year, month, day) {
        if (amount >= 0 && typeof !isNaN(amount)) {
            return this.saveWithdrawal(amount, year, month, day);
        } else {
            return `Please enter a valid amount to withdraw`
        }
    }

    checkBalance () {
        return `You have £${this.balance} in this account`;
    }

    rawTransactionData() {
        return (this.transactions);
    }

    printStatement () {
        for (let i = 0; i < this.transactions.length; i++) {
            const credit = [];
            const debit = [];
            (isNaN(this.transactions[i].credit) ? credit[i] = "" : credit[i] = this.transactions[i].credit.toFixed(2) + " ")
            if (isNaN(this.transactions[i].debit)) 
            { debit[i] = ""; } 
            else { debit[i] = this.transactions[i].debit.toFixed(2) + " "; }
            this.tRow.push(`${this.transactions[i].DOT} || ${credit[i]}|| ${debit[i]}|| ${this.transactions[i].balance.toFixed(2)}`);
          }

        return `date || credit || debit || balance\n` + this.tRow.reverse().join("\n");
    }
    private 

    saveDepost(amount, year, month, day) {
        this.balance += amount;
        var fullDay = new Date(year, month-1, day);
        var day = fullDay.toLocaleDateString("en-GB");
        
        this.transactions.push({ DOT: day, credit : amount, balance : this.balance })
        return `Successfully deposited £${amount}`
    }

    saveWithdrawal(amount, year, month, day) {
        this.balance -= amount;
        var fullDay = new Date(year, month-1, day);
        var day = fullDay.toLocaleDateString("en-GB");

        this.transactions.push({ DOT : day, debit : amount, balance : this.balance })
        return `Successfully withdrawn £${amount}`;
    }
}

module.exports = ATM;

/*
return (
    `${this.dates[0]} || ${this.transaction[0].toFixed(2)} || ${this.currentBalance[0].toFixed(2)}`
)
*/