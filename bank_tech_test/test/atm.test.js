const ATM = require('../lib/atm');

describe('ATM interactions', () => {
    
        it('deposits money: £1000', () => {
            const jenny = new ATM;

            expect(jenny.deposit('1000')).toEqual("Successfully deposited £1000");
        });

        it('deposits a negative amount', () => {
            const jenny = new ATM;

            expect(jenny.deposit('-1000')).toEqual("Please enter a valid amount to deposit");
        })

        it('deposits a non number', () => {
            const jenny = new ATM; 

            expect(jenny.deposit('lol')).toEqual("Please enter a valid amount to deposit");
        })
  

        it('withdraws £500', () => {
            const harry = new ATM;
            harry.deposit('1000');

            expect(harry.withdraw('500')).toEqual("Successfully withdrawn £500");
        })


        it('checks balance after a deposit and withdrawal', () => {
            const paul = new ATM; 
            paul.deposit(1000);
            paul.withdraw(500);
            expect(paul.checkBalance()).toEqual(500);
        })

        it('prints statement after several transactions', () => {
            const amy = new ATM;
            amy.deposit(1000);
            amy.deposit(2000);
            amy.withdraw(500);

            expect(amy.printStatement()).toEqual("14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00")
        })
})