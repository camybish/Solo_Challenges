class Bank {
    constructor () {
        this.bankAccount = null;
        this.tRow = [];
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

}

module.exports = Bank;