import React, { Component, useState } from "react";
import Square from "./Square";
import "./Board.css";

// export class Board extends Component {
const Board = () => {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   squares: Array(9).fill(null),
  // };
  // }
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // handleClick(i) {
  const handleClick = (i) => {
    // 원본 State를 복사하기
    // slice 메소드를 사용해서 원본 불변성 지킴
    // const newSquares = this.state.squares.slice();
    const newSquares = squares.slice();

    // 클릭한 부분의 square를 X로 변경하기
    newSquares[i] = "X";

    // 실제 state 업데이트
    // this.setState({ squares: newSquares });
    setSquares(newSquares);

    // xIsNext state Toggle
    setXIsNext(!xIsNext);
  };

  // renderSquare(i) {
  const renderSquare = (i) => {
    // return <Square value={i} />;
    return (
      <Square
        // value={this.state.squares[i]}
        value={squares[i]}
        // onClick={() => this.handleClick(i)}
        onClick={() => handleClick(i)}
      />
    );
  };

  // render() {
  const status = "Next player : X";
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)} */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
  // }
};

export default Board;
