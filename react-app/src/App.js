import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const App = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);

  const [stepNumbebr, setStepNember] = useState(0);

  const [xIsNext, setXIsNext] = useState(true);

  // const current = history[history.length - 1];
  const current = history[stepNumbebr];

  const winner = calculateWinner(current.squares);
  console.log(winner);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  const jumpTo = (step) => {
    setStepNember(step);
    setXIsNext(step % 2 === 0);
  };

  // 과거의 이동 표시
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        {/* <button>{desc}</button> */}
        <button className="move-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  // handleClick(i) {
  const handleClick = (i) => {
    const newHistory = history.slice(0, stepNumbebr + 1);
    const newCurrent = newHistory[newHistory.length - 1];

    // 원본 State를 복사하기
    // slice 메소드를 사용해서 원본 불변성 지킴
    // const newSquares = this.state.squares.slice();
    // const newSquares = current.squares.slice();
    const newSquares = newCurrent.squares.slice();

    // 이미 클릭한 부분 클릭 안되도록 & winner 생기면 게임 끝나도록 처리하기
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }

    // 클릭한 부분의 square를 X로 변경하기
    // newSquares[i] = "X";
    // 클릭한 부분의 square이 첫번째는 "X" 다음 차례면 "O"로 변경
    newSquares[i] = xIsNext ? "X" : "O";

    // 실제 state 업데이트
    // this.setState({ squares: newSquares });
    // setSquares(newSquares);
    // setHistory([...history, { squares: newSquares }]);
    setHistory([...newHistory, { squares: newSquares }]);

    // xIsNext state Toggle
    // setXIsNext(!xIsNext);
    setXIsNext((prev) => !prev);

    setStepNember(newHistory.length);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol style={{ listStyle: "none" }}>{moves}</ol>
        <div></div>
        <ol></ol>
      </div>
    </div>
  );
};

export default App;
