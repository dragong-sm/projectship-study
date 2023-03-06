// import React, { Component } from "react";
import React from "react";
import "./App.css";
import Board from "./components/Board";

// 클래스형 컴포넌트

// export default class App extends Component {
const App = () => {
  // render() {
  // render 안에서 적어주어야 실제로 화면에 보여짐
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* X O Status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
  // }
};
export default App;
