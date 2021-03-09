import { assert } from "console";
import { TicTacToe2 } from "../main/TicTacToe2";

describe('Calisthenics tic tac toe', () => {
    it("Can initialise a game with an empty board", () => {
        const game = new TicTacToe2()
        expect(game.displayBoard()).toEqual([
                [ "-", "-", "-" ],
                [ "-", "-", "-" ],
                [ "-", "-", "-" ]
            ])
    })

    it("Can place X on the board", () => {
        const game = new TicTacToe2()
        game.placePieceAt(2, 1);
        expect(game.displayBoard()).toEqual([
            [ "-", "X", "-" ],
            [ "-", "-", "-" ],
            [ "-", "-", "-" ]
        ])
    })

    it("Can place O on the board after X", () => {
        const game = new TicTacToe2()
        game.placePieceAt(2, 1);
        game.placePieceAt(1, 1);
        expect(game.displayBoard()).toEqual([
            [ "O", "X", "-" ],
            [ "-", "-", "-" ],
            [ "-", "-", "-" ]
        ])
    })

    it("Can place X on the board as our third move", () => {
        const game = new TicTacToe2()
        game.placePieceAt(2, 1);
        game.placePieceAt(1, 1);
        game.placePieceAt(1, 2);
        expect(game.displayBoard()).toEqual([
            [ "O", "X", "-" ],
            [ "X", "-", "-" ],
            [ "-", "-", "-" ]
        ])
    })

    it("Cannot place a piece on top of another", () => {
        const game = new TicTacToe2()
        game.placePieceAt(2, 1);
        expect(() => game.placePieceAt(2, 1)).toThrow(new Error("Illegal move"))
    })

    it("Three horizontal Xs win the game", () => {
        const game = new TicTacToe2()
        game.placePieceAt(1, 1);
        game.placePieceAt(2, 1);
        game.placePieceAt(1, 2);
        game.placePieceAt(2, 2);
        game.placePieceAt(1, 3);
        expect(game.status()).toEqual("Player X wins")

    })

    it("Three horizontal Os win the game", () => {
        const game = new TicTacToe2()
        game.placePieceAt(2, 3);
        game.placePieceAt(1, 1);
        game.placePieceAt(2, 1);
        game.placePieceAt(1, 2);
        game.placePieceAt(2, 2);
        game.placePieceAt(1, 3);
        expect(game.status()).toEqual("Player O wins")

    })

})