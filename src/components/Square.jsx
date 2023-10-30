// Square.js
import React from "react";
import './Square.css';

function Square(props) {
    console.log(props.value );
    return (
      <button className={`square ${props.value === "X" ? "x-square" : "o-square"}`} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  export default Square;
