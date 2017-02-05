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

        return this.CurrentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.board[rowIndex][columnIndex] === '') {
        	        if (this.turn%2 != 1){
            this.CurrentPlayerSymbol =  this.markPlayerX; 
        }else{
            this.CurrentPlayerSymbol =  this.markPlayerO;
        }
            this.board[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
        this.turn+=1;
                switch (true) {

        case (this.board[0][0]===this.board[0][1] && this.board[0][1]===this.board[0][2]&& 
            !(this.board[0][1]=== '')):
        this.Winner = this.board[0][0]; 
        
        break;

        case (this.board[1][0]===this.board[1][1] && this.board[1][1]===this.board[1][2] &&
            !(this.board[1][1]=== '')):
        this.Winner = this.board[1][0]; 
       
        break;


        case (this.board[2][0]===this.board[2][1] && this.board[2][1]===this.board[2][2] &&
             !(this.board[2][1]=== '')):
        this.Winner = this.board[2][0]; 
        
        break; //horizontal

        case (this.board[0][0]===this.board[1][0] && this.board[2][0]===this.board[1][0] &&
             !(this.board[0][0]=== '')):
        this.Winner = this.board[0][0]; 
        
        break;

        case (this.board[0][1]===this.board[1][1] && this.board[2][1]===this.board[1][1] &&
            !(this.board[1][1]=== '')):
         this.Winner = this.board[0][1]; 
        
        break;

        case (this.board[0][2]===this.board[1][2] && this.board[2][2]===this.board[1][2] &&
            !(this.board[1][2]=== '')):
         this.Winner = this.board[2][2]; 
        
        break; //vertical

        case (this.board[0][0]===this.board[1][1] && this.board[2][2]===this.board[1][1] &&
            !(this.board[1][1]=== '')):
         this.Winner = this.board[0][0]; 
        
        break;

        case (this.board[2][0]===this.board[1][1] && this.board[0][2]===this.board[1][1] &&
            !(this.board[1][1]=== '')):
         this.Winner = this.board[1][1]; 
        
        break;
        
            }
                    if (this.turn === 9 ) {
            this.noTurns = true;
        } else {this.noTurns = false;}
                if ( (this.Winner === null && this.turn === 9)  ) {
            this.Draw = true;
        }
        if (this.CurrentPlayerSymbol === 'x') {
            this.CurrentPlayerSymbol = this.markPlayerO;
        } else {
            this.CurrentPlayerSymbol = this.markPlayerX;

         }
        }
        }

    isFinished() {
        if (!(this.Winner === null) || this.Draw === true) {
            return true;
        } else { return false;}
    }

    getWinner() {

            return this.Winner;
    }

    noMoreTurns() {

        return this.noTurns;
    }

    isDraw() {

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
