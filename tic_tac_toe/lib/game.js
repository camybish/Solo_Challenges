let gameBoardTop = ' 1 | 2 | 3\n-----------\n'
let gameBoardMid = ' 4 | 5 | 6\n-----------\n'
let gameBoardBot = ' 7 | 8 | 9'


class Game {
    constructor () {
        this.turn = 0; 
    }

    showBoard() {
        let gameBoard = gameBoardTop + gameBoardMid + gameBoardBot;
        return (gameBoard)
    }

    crossTurn (pos) {
        switch (pos) {
            case (pos > 0 && pos <= 3) :
                this.changeBoardTop(pos, "X");
            case (pos > 3 && pos <= 6) :
                this.changeBoardMid(pos, "X");
            case (pos > 6 && pos <= 9) :
                this.changeBoardBot(pos, "X");
        }
    }

    turnDisplay() {
        let message = (this.turn % 2 === 0 ? "X: Make a move" : "O: Make a move")
        return message
    }

    private

    changeBoardTop () {

    }
    changeBoardMid (pos, player) {
        switch (pos) {
            case 5:
                gameBoardMid.split;
        }
    }

    changeBoardBot () {

    }

}

module.exports = Game;

const game = new Game();
console.log(game.showBoard())

game.crossTurn(5);

console.log(game.showBoard())
