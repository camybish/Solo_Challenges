class Bank {
    constructor () {
        this.list = null;
    }

    addTransactions (transactions) {
        let list = transactions;
    }

    //debug
    printList (list) {
        return list;
    }

    printStatement () {
        return this.list.forEach(this.formatStatement())
    }

    formatStatement () {
        return `${this.list.DOT} || ${this.list.credit} || ${this.list.debit} || ${this.list.balance}`
    }
}

module.exports = Bank;