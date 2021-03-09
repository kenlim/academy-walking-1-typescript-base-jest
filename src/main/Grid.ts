import { Player } from "./TicTacToe2";

export class Grid {
    internalGrid: string [][];
    constructor() {
        this.internalGrid =  [
            [ "-", "-", "-" ],
            [ "-", "-", "-" ],
            [ "-", "-", "-" ]
        ]
    }

    getPieceAt(x: number, y: number) {
        return this.internalGrid[y-1][x-1]
    }

    private placePieceAt(x: number, y: number, piece: Player) {
        this.internalGrid[y-1][x-1] = piece
    }
    

    setPieceAt(piece: Player, x: number, y:number ) {
        if (this.getPieceAt(x,y) === "-") return this.placePieceAt(x, y, piece);
        throw new Error("Illegal move");
    }

    getStatus(): string {
        this.internalGrid[0].filter(item => item === Player.O).length === 3;

        if (this.getPieceAt(1,1) !== "-" &&
            this.getPieceAt(1,1) === this.getPieceAt(1,2) && this.getPieceAt(1,2) === this.getPieceAt(1,3)) {
            return "Player " + this.getPieceAt(1,1) + " wins"
        }

        if (this.getPieceAt(2,1) !== "-" && this.getPieceAt(2,1) === this.getPieceAt(2,2) && this.getPieceAt(2,2) === this.getPieceAt(2,3)) {
            return "Player " + this.getPieceAt(2,1) + " wins"
        }

        return "Keep going"
    }

    displayBoard() {
        return this.internalGrid
    }
}
