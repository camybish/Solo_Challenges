const Bank = require('../lib/bank');
const ATM = require('../lib/atm');

describe('Bank interactions', () => {
    it('debugs', () => {
        const josh = new ATM;
        const mrJosh = new Bank;
        josh.deposit(150, "01/01/2022");

        mrJosh.addTransactions(josh);
        expect(mrJosh.printList()).toEqual("");
    })
    
    it('transfers transactions from the ATM class', () => {
        const josh = new ATM;
        const mrJosh = new Bank;
        josh.deposit(150, "01/01/2022");

        mrJosh.addTransactions(josh);
        expect(mrJosh.formatStatement()).toEqual("");
    })

})