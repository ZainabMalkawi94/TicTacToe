// Board.js
import React from "react";
import Square from "./Square";
import './Square.css';

class Board extends React.Component {
  renderSquare(i) {
    let squareBorder = "square"; // Default square class
    if (i === 0) {
      squareBorder = "square top left";
    } else if (i === 1) {
      squareBorder = "square top";
    } else if (i === 2) {
      squareBorder = "square top right";
    } else if (i === 3) {
      squareBorder = "square left";
    } else if (i === 5) {
      squareBorder = "square right";
    } else if (i === 6) {
      squareBorder = "square bottom left";
    } else if (i === 7) {
      squareBorder = "square bottom";
    } else if (i === 8) {
      squareBorder = "square bottom right";
    }

    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        squareBorder={squareBorder} // Pass the square border class as a prop
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
