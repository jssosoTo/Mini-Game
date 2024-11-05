import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import JSConfetti from "js-confetti";

const confetti = new JSConfetti();

export function showConfetti() {
  console.log("push");
  confetti.addConfetti();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={"/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
