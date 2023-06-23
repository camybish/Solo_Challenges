const Statement = require('../lib/statement');
const Bank = require('../lib/bank')

describe('ATM interactions', () => {
    // afterAll(() => {
    //     jest.useRealTimers()
    //   })

    it('checks single transaction - Bank --> Statement', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jennyStatement = new Statement(jenny);

        expect(jennyStatement.currentBalance()).toEqual(500);
    });

    it('checks multiple transactions - Bank --> Statement', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyStatement = new Statement(jenny);

        expect(jennyStatement.currentBalance()).toEqual(750);
    });

    it('checks raw Transactions - before formatting', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyStatement = new Statement(jenny);

        expect(jennyStatement.showRawTransactions()).toEqual({"balance": 750, "transactions": [{"DOT": [2020, 12, 25], "balance": 500, "moneyDiff": 500}, {"DOT": "today", "balance": 750, "moneyDiff": 250}]});
    });

    it('checks newTransactions after adding to Statement', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyStatement = new Statement(jenny);
        jennyStatement.print();

        expect(jennyStatement.newTransactions[1].balance).toEqual(750);
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