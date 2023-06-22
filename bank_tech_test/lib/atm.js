class ATM {
    constructor() {
        this.balance = 0;
        this.transactions = [];
        this.tRow = [];
    }

    deposit (amount, yearOrNow, month = null, day = null) {
        let date = this.dateFormatter(yearOrNow, month, day);
        if (amount >= 0 && typeof !isNaN(amount)) {
            return this.saveDeposit(amount, date);
        } else {
            return `Please enter a valid amount to deposit`;
        }
    }
    withdraw (amount, yearOrNow, month = null, day = null) {
        let date = this.dateFormatter(yearOrNow, month, day);
        if (amount >= 0 && typeof !isNaN(amount)) {
            return this.saveWithdrawal(amount, date);
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

    dateFormatter (yearOrNow, month, day) {
        if (month != null) {
        var fullDay = new Date(yearOrNow, month-1, day);
        return day = fullDay.toLocaleDateString("en-GB");
        } else {
            let today = new Date()
            return today.toLocaleDateString("en-GB");
        }
    }

    saveDeposit(amount, date) {
        this.balance += amount;
      
        this.transactions.push({ DOT: date, credit : amount, balance : this.balance })
        return `Successfully deposited £${amount}`
    }

    saveWithdrawal(amount, date) {
        this.balance -= amount;

        this.transactions.push({ DOT : date, debit : amount, balance : this.balance })
        return `Successfully withdrawn £${amount}`;
    }
}

module.exports = ATM;

/*
return (
    `${this.dates[0]} || ${this.transaction[0].toFixed(2)} || ${this.currentBalance[0].toFixed(2)}`
)
*/