import { Grid } from "../main/Grid";
import {Player} from "../main/TicTacToe2";

describe('TTT Grid test', () => {
    it("Detect a horizontal winner", () => {
        const game = new Grid()
        game.setPieceAt(Player.O, 1, 1) 
        game.setPieceAt(Player.O, 1, 2) 
        game.setPieceAt(Player.O, 1, 3)

        expect(game.getStatus()).toEqual("Player O wins")
    })

    it("Detect any horizontal winner", () => {
        const game = new Grid()
        game.setPieceAt(Player.O, 2, 1) 
        game.setPieceAt(Player.O, 2, 2) 
        game.setPieceAt(Player.O, 2, 3)

        expect(game.getStatus()).toEqual("Player O wins")
    })

})