

import { useState, useEffect } from "react";
import { Cells } from "./Cells";


export const Board = ({ gameBoard, player, onClick, cpuCoordinate }) => {


  const [showShips, setShowShips] = useState(false);
  const [playerHitCount, setPlayerHitCount] = useState(0)
  const [cpuHitCount, setCpuHitCount] = useState(0)

  const toggleShowShips = () => {
    setShowShips(!showShips)
  }

  useEffect(()=>{
    if(playerHitCount === 17){
      alert('Has Ganado')

    } else if (cpuHitCount === 17){
      alert('Has Perdido')
    }
  }, [playerHitCount,cpuHitCount])


  const updateHitCounters  = (value) => {
    if (value === 1 && player === 'CPU') {
      setPlayerHitCount(prev => prev + 1)
    } else if (value === 1 && player === 'Player') {
      setCpuHitCount(prev => prev +1)

    }
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
                onClick={() => {onClick();updateHitCounters(cell) }}
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

