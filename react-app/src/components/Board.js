import React, { Component, useState } from "react";
import Square from "./Square";
import "./Board.css";

// export class Board extends Component {
const Board = ({ squares, onClick }) => {
  // constructor(props) {
  // super(props);
  // this.state = {
  //   squares: Array(9).fill(null),
  // };
  // }

  // renderSquare(i) {
  const renderSquare = (i) => {
    // return <Square value={i} />;
    return (
      <Square
        // value={this.state.squares[i]}
        value={squares[i]}
        // onClick={() => this.handleClick(i)}
        // onClick={() => handleClick(i)}
        onClick={() => onClick(i)}
      />
    );
  };

  // render() {
  // const status = "Next player : X";
  return (
    <div className="board-wrapper">
      {/* <div className="status">{status}</div> */}
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
