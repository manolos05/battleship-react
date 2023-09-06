

import { Board } from './components/'

import './App.css';
import { useState } from 'react';
import { generateRandomGameBoard } from './utils/boardUtil';




function App() {


  const [cpuBoard, setCpuBoard] = useState([])
const [playerBoard, setPlayerBoard] = useState([])




useState(()=>{
  setCpuBoard(generateRandomGameBoard())
  setPlayerBoard(generateRandomGameBoard())
 
},[])






  /* GESTION DE TURNOS 
    Los turnos son gestionados por un estado, el que recibe como parametro un sting,
    con el condicional manejamos el turno del jugador correspondiente 
  
  
  */

  const [currentTurn, setCurrentTurn] = useState('CPU');

  const handleTurn = (player ) => {
    
    if (currentTurn !== player) {
      return
    }
    setCurrentTurn(currentTurn === 'Player' ? 'CPU' : 'Player');
  };

  /*fin de gestion de turnos */ 



  const [ cpuCoordinate, setcpuCoordinate] = useState([])
  const [ diccCoordinate, setDiccCoordinate] = useState([])

  const  selectRandomPosition = (board , existingCoordinates) => {
    const numRows = board.length;
    const numCols = board[0].length;
  
    let randomRow = 0; 
    let randomCol = 0;
    do {
      randomRow = Math.floor(Math.random() * numRows);
      randomCol = Math.floor(Math.random() * numCols);
    } while (existingCoordinates.some(coord => coord[0] === randomRow && coord[1] === randomCol));
  
    return [randomRow, randomCol];

  }
  const handleCpuClick = () => {
    
    const randomPos = selectRandomPosition(playerBoard, diccCoordinate);
    setcpuCoordinate(randomPos);
    setDiccCoordinate((prevCoordinates) => [...prevCoordinates, randomPos]);

  };

  
  return (
    <div className="app">
      <h1>Battleship Game Board</h1>




      <div className="main">
        <Board
          turn={currentTurn}
          gameBoard={playerBoard}
          player="Player"
          onClick={() => handleTurn('Player')}
          cpuCoordinate={cpuCoordinate}
        />
        <Board
          turn={currentTurn}
          gameBoard={cpuBoard}
          player="CPU"
          onClick={handleCpuClick}
        />
      </div>


    </div>
  );
}

export default App
