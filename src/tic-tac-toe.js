class TicTacToe {
    constructor() {
        this.markPlayerX = 'x';
        this.markPlayerO = 'o';
        this.turn = 0;
        this.board =new Array (
      new Array ('','',''),
      new Array ('','',''),
      new Array ('','',''));
        this.isDraw = false;
        
    }

    getCurrentPlayerSymbol() {
        if (this.turn%2 != 1){
            this.CurrentPlayerSymbol =  this.markPlayerX; 
        }else{
            this.CurrentPlayerSymbol =  this.markPlayerO;
        }
        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] === '') {this.board[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
        this.turn+=1;} 
    }

    isFinished() {

    }

    getWinner() {


    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {

    }
}
game = new TicTacToe();
module.exports = TicTacToe;
