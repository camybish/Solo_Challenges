const Statement = require('../lib/statement');
const Bank = require('../lib/bank')

//integration test

describe('ATM interactions', () => {
    afterAll(() => {
        jest.useRealTimers()
      })

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

    it('checks newTransactions object after adding to Statement', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, 2023, 6, 23)
        jennyStatement = new Statement(jenny);
        jennyStatement.print();

        expect(jennyStatement.newTransactions[1].balance).toEqual("750.00");
    });

    it('checks formatting of new transactions', () => {
        const jenny = new Bank();
        jenny.transaction(500, 2020, 12, 25)
        jenny.transaction(250, "now")
        jennyStatement = new Statement(jenny);

        expect(jennyStatement.print()).toEqual('date || credit || debit || balance\n23/06/2023 || 250.00 ||  || 750.00\n25/12/2020 || 500.00 ||  || 500.00');
    });

    it('checks formatting for the specific criteria', () => {
        const jenny = new Bank();
        jenny.transaction(1000, 2023, 1, 10)
        jenny.transaction(2000, 2023, 1, 13)
        jenny.transaction(-500, 2023, 1, 14)
        jennyStatement = new Statement(jenny);

        expect(jennyStatement.print()).toEqual('date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n13/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00');
    });
    
    it('ensures the current time input works for transactions', () => {
        const jenny = new Bank();

        jest.useFakeTimers("modern")
        jest.setSystemTime(new Date("2023-01-14"))

        jenny.transaction(1000, 2023, 1, 10)
        jenny.transaction(2000, "this day")
        jenny.transaction(-500, true)
        jennyStatement = new Statement(jenny);

        expect(jennyStatement.print()).toEqual('date || credit || debit || balance\n14/01/2023 ||  || 500.00 || 2500.00\n14/01/2023 || 2000.00 ||  || 3000.00\n10/01/2023 || 1000.00 ||  || 1000.00');
    });
})