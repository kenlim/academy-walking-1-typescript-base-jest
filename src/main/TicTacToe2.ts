import { Grid } from "./Grid"

export enum Player {
    X = "X",
    O = "O"
}

export class TicTacToe2 {
    grid: Grid
    currentPlayer: Player;

    constructor() {
        this.grid = new Grid();

        this.currentPlayer = Player.X;
    }    

    nextPlayer() {
        if (this.currentPlayer === Player.X) {
            this.currentPlayer = Player.O
            return
        } 
        
        this.currentPlayer = Player.X
    }

    placePieceAt(x: number, y: number) {
        this.grid.setPieceAt(this.currentPlayer, x, y)
        this.nextPlayer()
    }

    displayBoard() {
        return this.grid.displayBoard()
    }

    status() {
        
        return "Player O wins"
    }
    
}