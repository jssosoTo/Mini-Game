import React from "react";
import { useTicTacToeStore } from "./useTicTacToeStore.ts";

export default function TicTacToe() {
  const { board, handleClick, resetGame, isGameOver, winner } =
    useTicTacToeStore();

  return (
    <div className="w-full h-full relative">
      <div className="w-9/12 h-full grid grid-rows-3 grid-cols-3">
        {board.map((item: string, index: number) => (
          <div
            className="border cursor-pointer flex items-center justify-center text-9xl"
            key={index}
            onClick={() => handleClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="absolute -right-4 -translate-x-1/4 top-4 w-1/5 py-2 border rounded-lg px-2">
        <h1 className="text-center font-bold">
          —— {isGameOver ? "游戏结束" : "游戏进行中"} ——
        </h1>
        {isGameOver && <h2 className="text-center">赢方: {winner}</h2>}
        <div className="flex flex-col gap-1 items-center mt-4">
          <button className="w-1/2 btn" onClick={resetGame}>
            重置比赛
          </button>
          {/* <button className="w-1/2 btn">悔棋</button> */}
        </div>
      </div>
    </div>
  );
}
