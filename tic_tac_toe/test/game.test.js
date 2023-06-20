const { describe } = require('node:test')
const Game = require('../lib/game')

describe('Game states', () => {
    it('shows an empty game board', () => {
        const game = new Game();

        expect(game.showBoard()).toBe(" 1 | 2 | 3\n-----------\n 4 | 5 | 6\n-----------\n 7 | 8 | 9")
    })

    it("lets X make the first move - they play centre", () => {
        const game = new Game();
        expect(game.turnDisplay()).toBe("X: Make a move")
    })

    it("takes Xs move (pos 5) and displays it to the screen", () => {
        const game = new Game();

        game.crossTurn(5);
        expect(game.showBoard()).toBe(" 1 | 2 | 3\n-----------\n 4 | X | 6\n-----------\n 7 | 8 | 9")
    })
})

/*
Game
    constructor
        turn
        gameBoard

    showBoard - shows board
    crossTurn(position) - allows X to make a move
        uses substring manipulation to add move
        checks for illegal moves

    noughtTurn(postion) - allows O to make a move
        uses substring manipulation to add move
        checks for illegal moves

    turnDisplay
        gives feedback to the player to tell X or O to make a move

    ~private~
    changeBoardTop
    changeBoardMid
    changeBoardBot
    illegalMoves
    winState


*/