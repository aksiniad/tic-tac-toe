class TicTacToe {
    constructor() {
        this.markPlayerX = 'x';
        this.markPlayerO = 'o';
        this.turn = 0;
        this.board = [
      ['','',''],
      ['','',''],
      ['','','']];
        this.Draw = false;
        this.noTurns = false;
        this.Winner = null;
        this.CurrentPlayerSymbol = 'x';
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
        if (this.board[rowIndex][columnIndex] === '') {
            this.board[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
        this.turn+=1;
        if (this.CurrentPlayerSymbol === 'x') {
            this.CurrentPlayerSymbol = this.markPlayerO;
        } else {
            this.CurrentPlayerSymbol = this.markPlayerX;
            /*if (!(this.getWinner() === null)) { this.Winner = this.getWinner(); }
            if (this.isDraw()){this.Draw = this.isDraw();}*/
         }
        }
        }

    isFinished() {
        if (!(this.Winner === null) || this.Draw === true) {
            return true;
        } else { return false;}
    }

    getWinner() {
        switch (true) {

        case (this.board[0][0]===this.board[0][1] && this.board[0][1]===this.board[0][2]&& 
            !(this.board[0][1]=== '')):
        this.Winner = this.board[0][0]; 
        return this.Winner;
        break;

        case (this.board[1][0]===this.board[1][1] && this.board[1][1]===this.board[1][2] &&
            !(this.board[1][1]=== '')):
        this.Winner = this.board[1][0]; 
        return this.Winner;
        break;


        case (this.board[2][0]===this.board[2][1] && this.board[2][1]===this.board[2][2] &&
             !(this.board[2][1]=== '')):
        this.Winner = this.board[2][0]; 
        return this.Winner;
        break; //horizontal

        case (this.board[0][0]===this.board[1][0] && this.board[2][0]===this.board[1][0] &&
             !(this.board[0][0]=== '')):
        this.Winner = this.board[0][0]; 
        return this.Winner;
        break;

        case (this.board[0][1]===this.board[1][1] && this.board[2][1]===this.board[1][1] &&
            !(this.board[1][1]=== '')):
         this.Winner = this.board[0][1]; 
        return this.Winner;
        break;

        case (this.board[0][2]===this.board[1][2] && this.board[2][2]===this.board[1][2] &&
            !(this.board[1][2]=== '')):
         this.Winner = this.board[2][2]; 
        return this.Winner;
        break; //vertical

        case (this.board[0][0]===this.board[1][1] && this.board[2][2]===this.board[1][1] &&
            !(this.board[1][1]=== '')):
         this.Winner = this.board[0][0]; 
        return this.Winner;
        break;

        case (this.board[2][0]===this.board[1][1] && this.board[0][2]===this.board[1][1] &&
            !(this.board[1][1]=== '')):
         this.Winner = this.board[1][1]; 
        return this.Winner;
        break;
        
            }
            return this.Winner;
    }

    noMoreTurns() {
        if (this.turn === 9 || !(this.Winner === null)) {
            this.noTurns = true;
        } else {this.noTurns = false;}
        return this.noTurns;
    }

    isDraw() {
        if ( (this.Winner === null && this.turn === 9)  ) {
            this.Draw = true;
        }
            return this.Draw;
        }
    

    getFieldValue(rowIndex, colIndex) {
        if (this.board[rowIndex][colIndex] === '') {
            return null;
        } else {
        return this.board[rowIndex][colIndex];
        }
    }
}
game = new TicTacToe();
module.exports = TicTacToe;
