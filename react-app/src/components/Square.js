import React, { Component } from "react";
import "./Square.css";

// export class Square extends Component {
const Square = ({ value, onClick }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }

  // render() {
  return (
    <button
      className="square"
      // onClick={() => {
      //   // this.setState({ value: "X" })
      //   // this.props.onClick();
      // }}
      onClick={onClick}
    >
      {/* {this.state.value} */}
      {/* {this.props.value} */}
      {value}
    </button>
  );
  // }
};

export default Square;
