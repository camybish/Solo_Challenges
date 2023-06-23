class Statement {
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

    print () {
        // value.moneyDiff > 0 ? credit.push(value.moneyDiff) : debit.push(value.moneyDiff);

        this.rawTransactions.transactions.forEach(value => {
            let debit = null;
            let credit = null;
            value.moneyDiff > 0 ? credit = value.moneyDiff : debit = value.moneyDiff;
            let date = (this.formatDate(value.DOT)); // push into the new object instead
            this.newTransactions.push({DOT: date, credit : credit, debit : debit, balance: value.balance})
        })
        
        //return this.formatTransactions()
        // needs another forEach loop to iterate through the transactions and provide the array, DOT, to formatDate
   
    }

    private

    formatTransactions () {

    }

    formatDate (DOT) { 
        if (Array.isArray(DOT)) {
            var fullDay = new Date(DOT[0], DOT[1]-1, DOT[2]);
            return fullDay.toLocaleDateString("en-GB");
        } else {
            let today = new Date()
            return today.toLocaleDateString("en-GB");
        }
    }
}

module.exports = Statement;