import React from "react";

export default function Home() {
  return (
    <div className="h-full">
      <h1 className="text-2xl pb-2 border-b">主页</h1>
      <div className="mt-4">
        <h2 className="pl-2 mb-1">游戏介绍</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white rounded-lg overflow-hidden">
            <h4 className="pl-2 text-xl bg-slate-600 text-white">井字棋</h4>
            <p className="px-4">
              井字棋，英文名叫Tic-Tac-Toe，是一种在3*3格子上进行的连珠游戏，和五子棋类似，由于棋盘一般不画边框，格线排成井字故得名。游戏需要的工具仅为纸和笔，然后由分别代表O和X的两个游戏者轮流在格子里留下标记（一般来说先手者为X），任意三个标记形成一条直线，则为获胜。
              ——
              <a
                className="text-teal-500 hover:underline"
                href="https://baike.baidu.com/item/%E4%BA%95%E5%AD%97%E6%A3%8B?fromModule=lemma_search-box"
              >
                百度百科
              </a>
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <h4 className="pl-2 text-xl bg-slate-600 text-white">五子棋</h4>
            <p className="px-4 pb-4">
              五子棋起源于中国，是全国智力运动会竞技项目之一，是一种两人对弈的纯策略型棋类游戏。双方分别使用黑白两色的棋子，下在棋盘直线与横线的交叉点上，先形成五子连珠者获胜。
              五子棋容易上手，老少皆宜，而且趣味横生，引人入胜。它不仅能增强思维能力，提高智力，而且富含哲理，有助于修身养性。
              ——
              <a
                className="text-teal-500 hover:underline"
                href="https://baike.baidu.com/item/%E4%BA%94%E5%AD%90%E6%A3%8B/130266?fr=ge_ala"
              >
                百度百科
              </a>
            </p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden">
            <h4 className="pl-2 text-xl bg-slate-600 text-white">阻挡球</h4>
            <p className="px-4 pb-4">
              此游戏为双人游戏！通过来回跳动的小球，玩家的任务就是挡住这颗球，不让它进入己方的区域，使用
              <code className="bg-slate-200"> W </code>控制滑块向上，
              <code className="bg-slate-200"> S </code>
              控制滑块向下。（字母按键为左方滑块玩家，右方滑块玩家对应的键位分别是
              <code className="bg-slate-200"> &uarr; </code>向上，
              <code className="bg-slate-200"> &darr; </code>向下）
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
