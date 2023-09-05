

import { useState } from "react";
import { Cells } from "./Cells";


export const Board = ({ gameBoard, player, onClick, cpuCoordinate }) => {

  const [showShips, setShowShips] = useState(false);

  const toggleShowShips = () => {
    setShowShips(!showShips)
  }

  return(

<>
<div className="board" >
  <h2> {player} </h2>
        {gameBoard.map((row, rowIndex) => (
          <div key={rowIndex} className="row" style={{pointerEvents: player === 'Player' && "none" }}>
            {row.map((cell, columnIndex) => {
             
               return <Cells
                key={columnIndex}
                value={cell}
                showShips={showShips}
                cellClicked={JSON.stringify([rowIndex, columnIndex]) === JSON.stringify(cpuCoordinate)}
                onClick={onClick}
              />
              })}

          </div>
        ))}
       
        <br />
        {player === "Player"  && <button onClick={() => toggleShowShips()}>Show Ships</button> }
      </div>
    </>
  
)
};

