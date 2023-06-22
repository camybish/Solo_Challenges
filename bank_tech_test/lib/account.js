class Account {
    constructor(transactions) {
        this.rawTransactions = transactions;
        this.newTransactions = [];
    } // new transactions may needed to be converted to an array of objects for formatting purposes
    
    currentBalance () { // debug
        return this.rawTransactions.balance;
    }

    showRawTransactions () { // debug
        return this.rawTransactions;
    }

    formatTransactions () {
        this.rawTransactions.forEach(value => {
            let credit = null;
            let debit = null;
            value.moneyDiff > 0 ? value.moneyDiff = credit : value.moneyDiff = debit
            this.newTransactions.push({DOT: value.date, credit : credit, debit : debit, balance: value.balance})
        })
    }

    showNewTransactions () {
        return this.newTransactions;
    }
}

module.exports = Account;