export class TicTacToe {
    // We are going to refer to the cells by index
    private board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
    private currentPlayer = 'X'

    playerTurn(){
        return this.currentPlayer;
    }

    pieceAt(x:number, y:number){
        return this.board[this.boardIndex(x,y)];
    }

    boardIndex(x:number, y:number){
        return (x * 3) + y;
    }

    hasWon(player: string){
        if((this.pieceAt(0,0) === player) && (this.pieceAt(0,1) === player) && (this.pieceAt(0,2) === player)){
            return true
        } else {
            return false
        }
    }

    private swapPlayer() {
        if(this.currentPlayer == 'X') {
            this.currentPlayer = 'O'
        } else {
            this.currentPlayer = 'X'
        }
    }

    placePiece(x: number, y: number) {
        var boardIndex = this.boardIndex(x,y);
        if (this.board[boardIndex] === "-") {
            this.board[boardIndex] = this.currentPlayer

            // if player has formed a row, then win
            if (this.hasWon(this.currentPlayer)) {
                return this.currentPlayer + " wins"
            } else {
                this.swapPlayer();
            }
         } else {
            return "No. Try again"
        }

        return "OK"
    }
}