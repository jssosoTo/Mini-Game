import { create } from "zustand";

const initialState = {
  board: new Array(9).fill(""),
  turn: "X",
  winner: null,
  isGameOver: false,
};

const winnerCombines = [
  "0,1,2",
  "3,4,5",
  "6,7,8",
  "0,4,8",
  "0,3,6",
  "1,4,7",
  "2,4,6",
  "2,5,8",
];
export const useTicTacToeStore = create((set: any, get: any) => ({
  ...initialState,
  checkWinner: (board: string[], turn: "X" | "O") => {
    const clickOperation: "X" | "O" = turn === "X" ? "O" : "X";
    let operations: number[] = [];
    let i = -1;
    do {
      i = board.indexOf(clickOperation, i + 1);
      operations.push(i);
    } while (i !== -1);
    operations.sort((a, b) => a - b);
    const isWinner = winnerCombines.some((combine) =>
      operations.toString().includes(combine)
    );
    if (isWinner) {
      set((state: any) => ({
        ...state,
        ...initialState,
        winner: clickOperation,
        isGameOver: true,
        // checkWinner: state.checkWinner,
        // handleClick: state.handleClick
      }));
    }
  },
  handleClick: (index: number) => {
    if (get().isGameOver || get().board[index] !== "") return;
    set(() => {
      const board = [...get().board];
      const turn = get().turn === "X" ? "O" : "X";
      board[index] = get().turn;
      get().checkWinner(board, turn);
      return {
        board,
        turn,
      };
    });
  },
  resetGame: () =>
    set(
      (state: any) => ({
        ...state,
        ...initialState,
      }),
      true
    ),
}));
