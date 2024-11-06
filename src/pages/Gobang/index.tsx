import React from "react";
import { useGobangStore } from "./useGobangStore.ts";
import { PauseCircleFilled, PauseCircleOutlined } from "@ant-design/icons";

export default function Gobang() {
  const { handleClick, withdraw, resetGame, boards, isGameOver, winner } =
    useGobangStore();

  const newBoards = boards.map((row: string[], rowIndex: number) => {
    return row.map((col: string, colIndex: number) => (
      <div
        className="border cursor-pointer flex items-center justify-center text-xl"
        key={rowIndex + "row" + colIndex}
        onClick={() => handleClick(rowIndex, colIndex)}
      >
        {col === "黑子" ? (
          <PauseCircleFilled />
        ) : col === "白子" ? (
          <PauseCircleOutlined />
        ) : null}
      </div>
    ));
  });
  const board = [].concat(...(newBoards as any[]));

  return (
    <div className="w-full h-full relative">
      <div className="w-9/12 h-full grid spanPow-15">{board}</div>
      <div className="absolute -right-4 -translate-x-1/4 top-4 w-1/5 py-2 border rounded-lg px-2">
        <h1 className="text-center font-bold">
          —— {isGameOver ? "游戏结束" : "游戏进行中"} ——
        </h1>
        {isGameOver && <h2 className="text-center">赢方: {winner}</h2>}
        <div className="flex flex-col gap-1 items-center mt-4">
          <button className="w-1/2 btn" onClick={resetGame}>
            重置比赛
          </button>
          <button
            className="w-1/2 btn"
            onClick={isGameOver ? () => {} : withdraw}
          >
            悔棋
          </button>
        </div>
      </div>
    </div>
  );
}
