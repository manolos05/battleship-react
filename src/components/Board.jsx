

import { Cells } from "./Cells";

const xLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const yLabels = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

export const Board = ({ gameBoard }) => (


  <div className="board">
    
    {gameBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, columnIndex) => (
          <Cells key={columnIndex} value={cell} />
        ))}
      </div>
    ))}
  </div>
);

