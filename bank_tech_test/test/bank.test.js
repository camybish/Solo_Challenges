const { describe } = require('node:test')
const Bank = require('../lib/bank')

describe('Bank', () => {
    it('tests if a basic transaction is saved', () => {
        const david = new Bank()
        david.transaction(500, 2000, 1, 1)

        expect(david.transactions[0].balance).toBe((500))
        expect(david.transactions[0].DOT).toEqual([2000,1,1])
    })

    it('tests if multiple transactions are saved', () => {
        const david = new Bank()
        david.transaction(500, 2000, 1, 1)
        david.transaction(-10, "today")

        expect(david.transactions[1].balance).toBe(490)
        expect(david.transactions[1].DOT).toEqual("today")
        expect(david.transactions[1].moneyDiff).toBe(-10)

    })
})