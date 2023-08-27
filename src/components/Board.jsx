

import { useState } from "react";
import { Cells } from "./Cells";


export const Board = ({ gameBoard, playerNumber, onClick }) => {

  const [showShips, setShowShips] = useState(true);

  

  const toggleShowShips = () => {
    setShowShips(!showShips)
  }

  return(

<>
<div className="board">
  <h2>Player {playerNumber} </h2>
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="row" onClick={onClick}>
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
        {playerNumber === "Player"  && <button onClick={() => toggleShowShips()}>Show Ships</button> }
      </div>
    </>
  
)
};

