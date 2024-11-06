import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import getWinner from "../../ultils/getWinner.ts";
import { showConfetti } from "../../index.js";

const arr = new Array(15).fill(new Array(15).fill(""));

const initialState = {
  boards: arr,
  turn: "黑子",
  lastBoards: arr,
  lastTurn: "黑子",
  winner: null,
  isGameOver: false,
};

export const useGobangStore = create(
  immer((set: any, get: any) => ({
    ...initialState,
    checkWinner: (row: number, col: number) => {
      const { win, winner } = getWinner(get().boards, get().lastTurn, 5, {
        row,
        col,
      });
      if (win) {
        showConfetti();
        set((state: any) => {
          state.winner = winner;
          state.isGameOver = true;
        });
      }
    },
    handleClick: (row: number, col: number) => {
      if (get().isGameOver || get().boards[row][col] !== "") return;
      set((state: any) => {
        state.lastBoards = get().boards;
        state.boards[row][col] = get().turn;
        state.lastTurn = get().turn;
        state.turn = get().turn === "白子" ? "黑子" : "白子";
      });
      get().checkWinner(row, col);
    },
    resetGame() {
      set(
        (state: any) => ({
          ...state,
          ...initialState,
        }),
        true
      );
    },
    withdraw() {
      set((state: any) => {
        state.boards = get().lastBoards;
        state.turn = get().lastTurn;
      });
    },
  }))
);
