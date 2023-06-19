const { statement } = require("@babel/template");

class ATM {
    constructor() {
        this.balance = 0;
        this.transactions = [];
        this.tRow = [];
        this.statement = null;
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
        if (amount >= 0 && typeof !isNaN(amount)) {
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

    rawTransactionData() {
        return (this.transactions);
    }

    printStatement () {
        return `date || credit || debit || balance\n` + this.statement.join("\n")
        // refactor with forEach somehow
    }

    formatStatement () {
        for (let i = 0; i < this.transactions.length; i++) {
            const credit = [];
            const debit = [];
            if (isNaN(this.transactions[i].credit)) {
                credit[i] = "";
            } else {
                credit[i] = this.transactions[i].credit.toFixed(2) + " ";
            }
            if (isNaN(this.transactions[i].debit)) {
                debit[i] = "";
            } else {
                debit[i] = this.transactions[i].debit.toFixed(2) + " ";
            }
            this.tRow.push(`${this.transactions[i].DOT} || ${credit[i]}|| ${debit[i]}|| ${this.transactions[i].balance.toFixed(2)}`);
          }

        const statement = this.tRow.reverse();
        this.statement = statement;
        return this.statement;
    }
    
}

module.exports = ATM;

/*
return (
    `${this.dates[0]} || ${this.transaction[0].toFixed(2)} || ${this.currentBalance[0].toFixed(2)}`
)
*/