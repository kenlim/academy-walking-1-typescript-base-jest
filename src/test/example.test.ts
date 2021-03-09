import { assert } from "console";
import {TicTacToe} from "../main/TicTacToe";

// var game = new Game();
        // game returns: Player X moves first
        // STDIN

        // game.placePieceAt(0,0)
        
        // X placed at (0, 0)
        // game.placePieceAt(1, 1)
        // O placed at (1, 1)

        // game.placePieceAt(-1, -1)
        // game returns: "Invalid move, try again"
        // ....
        //  game.placePieceAt(2,2)
        // game returns: Player X wins!
        // game returns: No moves left, DrAW!

        // Play again? Y/N
        // Close game, no more STDIn.




describe('Tic Tac Toe game lib', () => {
    it("Can initialise a game", () => {
        var game = new TicTacToe()
        
        expect(game.playerTurn()).toBe("X")
    })

    it("Player can place a piece at a coordinate", () => {
        var game = new TicTacToe()

        expect(game.placePiece(0,0)).toBe('OK')

    })

    it("If one piece has been placed, it's O's turn", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)

        expect(game.playerTurn()).toBe("O")

    })

    it("If two pieces have been placed, it's X's turn", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)
        game.placePiece(0,1)

        expect(game.playerTurn()).toBe("X")

    })

    it("Player cannot place a piece on top of another", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)
        expect(game.placePiece(0,0)).toBe('No. Try again')
    })

    it("On invalid move, the same player should try again. ", () => {
        var game = new TicTacToe()

        // First piece was an X
        game.placePiece(0,0)

        // O Making an invalid move.
        game.placePiece(0,0)
        // It's still O's turn
        expect(game.playerTurn()).toBe('O')
    })

    it("Should record player 1 position", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)
        expect(game.pieceAt(0,0)).toBe('X')
    })

    it("Should record player 2 position", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)
        game.placePiece(0,1)
        expect(game.pieceAt(0,1)).toBe('O')
    })

    it("3x in the first row, wins", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)
        game.placePiece(1,0)
        game.placePiece(0,1)
        game.placePiece(1,1)
        expect(game.placePiece(0,2)).toBe('X wins')
    })

    it("3o's in a row wins the game", () => {
        var game = new TicTacToe()
        game.placePiece(2,2)
        game.placePiece(0,2)
        game.placePiece(1,0)
        game.placePiece(0,1)
        game.placePiece(1,1)
        expect(game.placePiece(0,0)).toBe('O wins')
    })

    it("3x in the first column, wins", () => {
        var game = new TicTacToe()

        game.placePiece(0,0)
        game.placePiece(1,1)
        game.placePiece(1,0)
        game.placePiece(2,1)
        expect(game.placePiece(2,0)).toBe('X wins')
    })

})