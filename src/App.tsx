import { RubyOutlined } from "@ant-design/icons";
import classNames from "classnames";
import React from "react";
import {
  Link,
  Route,
  RouteObject,
  Routes,
  useLocation,
} from "react-router-dom";
import TicTacToe from "./pages/TicTacToe/index.tsx";
import Home from "./pages/Home/index.tsx";
import Gobang from "./pages/Gobang/index.tsx";

const routes: (RouteObject & { name: string; hideInMenu?: boolean })[] = [
  {
    path: "/",
    name: "主页",
    hideInMenu: true,
    element: <Home />,
  },
  {
    path: "/TicTacToe",
    name: "井字棋",
    element: <TicTacToe />,
  },
  {
    path: "/Gobang",
    name: "五子棋",
    element: <Gobang />,
  },
  {
    path: "/StopEnter",
    name: "阻挡球",
    element: <div>阻挡球</div>,
  },
];
function App() {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <aside className="px-6 py-4 min-w-52 flex flex-col">
        <div className="flex items-center gap-2 justify-center text-xl pb-2 border-b">
          <RubyOutlined />
          <h1 className="text-green-500">Mini-Game</h1>
        </div>
        <ul className="flex-1 flex flex-col gap-1">
          {routes
            .filter((route) => !route.hideInMenu)
            .map((route) => {
              const isActive = location.pathname.includes(route.path as string);

              return (
                <li key={route.path}>
                  <Link
                    className={classNames("block py-1 px-2 rounded", {
                      "bg-green-500 text-white": isActive,
                    })}
                    to={route.path!}
                  >
                    {route.name}
                  </Link>
                </li>
              );
            })}
        </ul>
      </aside>
      <div className="flex-1 bg-sky-50 p-4 rounded-3xl">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
