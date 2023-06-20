const ATM = require('../lib/atm');

describe('ATM interactions', () => {
    
    it('deposits money: £1000', () => {
        const jenny = new ATM;

        expect(jenny.deposit(1000)).toEqual("Successfully deposited £1000");
    });

    it('deposits a negative amount', () => {
        const jenny = new ATM;

        expect(jenny.deposit(-1000)).toEqual("Please enter a valid amount to deposit");
    })

    it('deposits a non number', () => {
        const jenny = new ATM; 

        expect(jenny.deposit('lol')).toEqual("Please enter a valid amount to deposit");
    })
    
    it('withdraws £500', () => {
        const harry = new ATM;
        harry.deposit(1000);
        
        expect(harry.withdraw(500)).toEqual("Successfully withdrawn £500");
    })

    it('checks balance after a deposit and withdrawal - includes date', () => {
        const paul = new ATM; 
        paul.deposit(1000, 2023, 1, 10);
        paul.withdraw(500);
        expect(paul.checkBalance()).toEqual("You have £500 in this account");
    })

    it('prints statement after several transactions - includes date', () => {
        const amy = new ATM;
        amy.deposit(1000, 2023, 1, 10);

        expect(amy.rawTransactionData()).toEqual([{ DOT : "10/01/2023", balance : 1000, credit : 1000 }])
    })

    it('prints statement after several transactions - includes date', () => {
        const amy = new ATM;
        amy.deposit(1000, 2023, 1, 10);
        amy.deposit(2000, 2023, 1, 13);
        amy.withdraw(500, 2023, 1, 14);

        expect(amy.rawTransactionData()).toEqual([{ DOT : "10/01/2023", balance : 1000, credit : 1000 }, { DOT : "13/01/2023", balance : 3000, credit : 2000 }, { DOT : "14/01/2023", balance : 2500, debit : 500}])
    })

    it('prints statement after several transactions - includes date', () => {
        const amy = new ATM;
        amy.deposit(1000, 2023, 1, 10);
        amy.deposit(2000, 2023, 1, 13);
        amy.withdraw(500, 2023, 1, 14);

        expect(amy.printStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
    })

    it('prints statement after two transactions - includes date', () => {
        const abdul = new ATM;
        abdul.deposit(1000, 2023, 1, 10);
        abdul.withdraw(500, 2023, 1, 14);

        expect(abdul.printStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 500.00\n10/01/2023 || 1000.00 || || 1000.00')
    })
})

/*
Test for the object
Test for the transfer
Test for one line 
Test for all lines

date       || credit  || debit  || balance
14/01/2023 ||         || 500.00 || 2500.00
13/01/2023 || 2000.00 ||        || 3000.00
10/01/2023 || 1000.00 ||        || 1000.00
*/