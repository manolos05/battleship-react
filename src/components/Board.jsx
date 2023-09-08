

import { useState, useEffect } from "react";
import { Cells } from "./Cells";


export const Board = ({ gameBoard, player, onClick, cpuCoordinate    }) => {



  const [showShips, setShowShips] = useState(false);

  const toggleShowShips = () => {
    setShowShips(!showShips)
  }



  // Determinar quien es el ganador de la partida
  const [playerHitCount, setPlayerHitCount] = useState(0)
  const [cpuHitCount, setCpuHitCount] = useState(0)

  const playerWins = localStorage.getItem("Player");
  const CpuWins = localStorage.getItem("Cpu");


  useEffect(()=>{
    if(playerHitCount === 17){
      alert('Has Ganado')
      localStorage.setItem("Player", Number(playerWins) + 1)
 
    } else if (cpuHitCount === 17){
      alert('Has Perdido')
      localStorage.setItem("Cpu", Number(CpuWins) + 1)
    }
  
  }, [playerHitCount,cpuHitCount])

/*El Ganador se determina en funcion al jugador que sume 17.
Esto es el valor de las celdas que poseen un barco
*/
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
                onClick={() => {onClick(); updateHitCounters(cell) }}
             
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

