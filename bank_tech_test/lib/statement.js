class Statement {
    constructor(transactions) {
        this.rawTransactions = transactions;
        this.newTransactions = [];
    }
    
    currentBalance () { // debug
        return this.rawTransactions.balance;
    }

    showRawTransactions () { // debug
        return this.rawTransactions;
    }

    print () {
        this.rawTransactions.transactions.forEach(value => {
            let debit = '';
            let credit = '';
            value.moneyDiff > 0 ? credit = value.moneyDiff.toFixed(2) : debit = Math.abs(value.moneyDiff).toFixed(2);
            let date = (this.formatDate(value.DOT)); 
            this.newTransactions.push({DOT: date, credit : credit, debit : debit, balance: value.balance.toFixed(2)})
        })
        
        return this.formatTransactions()
    }

    private

    formatTransactions () {
        let display = [];
        this.newTransactions.forEach(value => {
            display.push(`${value.DOT} || ${value.credit} || ${value.debit} || ${value.balance}`);
        })
        return `date || credit || debit || balance\n` + display.reverse().join('\n');
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