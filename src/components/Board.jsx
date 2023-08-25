

import { useState } from "react";
import { Cells } from "./Cells";


export const Board = ({ gameBoard }) => {

  const [showShips, setShowShips] = useState(true);

  const toggleShowShips = () => {
    setShowShips(!showShips)
  }

  return(

<>
  <div className="board">
    
    {gameBoard.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, columnIndex) => (
          <Cells key={columnIndex} value={cell} showShips={showShips} />
        ))}
      </div>
    ))}
  </div>
  <br />
  <button onClick={() => toggleShowShips()}>Show Ships</button>
  </>)
};

