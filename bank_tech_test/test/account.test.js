const Account = require('../lib/account');
const Bank = require('../lib/bank')

describe('ATM interactions', () => {
    // afterAll(() => {
    //     jest.useRealTimers()
    //   })

    it('checks single transaction - Bank --> Account', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jennyAccount = new Account(jenny);

        expect(jennyAccount.currentBalance()).toEqual(500);
    });

    it('checks multiple transactions - Bank --> Account', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyAccount = new Account(jenny);

        expect(jennyAccount.currentBalance()).toEqual(750);
    });

    it('checks raw Transactions - before formatting', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyAccount = new Account(jenny);

        expect(jennyAccount.showRawTransactions()).toEqual({"balance": 750, "transactions": [{"DOT": [2020, 12, 25], "balance": 500, "moneyDiff": 500}, {"DOT": "today", "balance": 750, "moneyDiff": 250}]});
    });

    xit('checks newTransactions after adding to account', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyAccount = new Account(jenny);
        jennyAccount.formatTransactions();

        expect(jennyAccount.showNewTransactions()).toEqual(750);
    });

    xit('deposits a non number', () => {
        const jenny = new ATM; 

        expect(jenny.deposit('lol')).toEqual("Please enter a valid amount to deposit");
    });
    
    xit('withdraws £500', () => {
        const harry = new ATM;
        harry.deposit(1000);
        
        expect(harry.withdraw(500)).toEqual("Successfully withdrawn £500");
    });

    xit('checks balance after a deposit and withdrawal - includes date', () => {
        const paul = new ATM; 
        paul.deposit(1000, 2023, 1, 10);
        paul.withdraw(500);
        expect(paul.checkBalance()).toEqual("You have £500 in this account");
    });
})