

import { useState } from "react";
import { Cells } from "./Cells";


export const Board = ({ gameBoard, playerNumber }) => {

  const [showShips, setShowShips] = useState(true);

  const toggleShowShips = () => {
    setShowShips(!showShips)
  }

  return(

<>
<div className="board">
  <h2>Player {playerNumber} </h2>
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, columnIndex) => (
              <Cells
                key={columnIndex}
                value={cell}
                showShips={showShips}
              />
            ))}

          </div>
          
        ))}
       
        <br />
        {playerNumber === "1"  && <button onClick={() => toggleShowShips()}>Show Ships</button> }
      </div>
    </>
  
)
};

