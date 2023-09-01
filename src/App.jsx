

import { Board } from './components/'

import './App.css';
import { useState } from 'react';


const gameBoard = [
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
];

const gameBoardCPU = [
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
];


function App() {

  const [currentTurn, setCurrentTurn] = useState('CPU');
  const [ cpuCoordinate, setcpuCoordinate] = useState([])
  const [ diccCoordinate, setDiccCoordinate] = useState([])

  const handleTurn = (player ) => {
    
    if (currentTurn !== player) {
      return
    }
    setCurrentTurn(currentTurn === 'Player' ? 'CPU' : 'Player');
  };

  const  selectRandomPosition = (board , existingCoordinates) => {
    const numRows = board.length;
    const numCols = board[0].length;
  
    let randomRow, randomCol;
    do {
      randomRow = Math.floor(Math.random() * numRows);
      randomCol = Math.floor(Math.random() * numCols);
    } while (existingCoordinates.some(coord => coord[0] === randomRow && coord[1] === randomCol));
  
    return [randomRow, randomCol];

  }
  const handleCpuClick = () => {
    const randomPos = selectRandomPosition(gameBoard, diccCoordinate);
    setcpuCoordinate(randomPos);
    setDiccCoordinate((prevCoordinates) => [...prevCoordinates, randomPos]);

  };

  
console.log(diccCoordinate)


  
  return (
    <div className="app">
      <h1>Battleship Game Board</h1>

      <div className="main">
        <Board
          turn={currentTurn}
          gameBoard={gameBoard}
          player="Player"
          onClick={() => handleTurn('Player')}
          cpuCoordinate={cpuCoordinate}
        />
        <Board
          turn={currentTurn}
          gameBoard={gameBoardCPU}
          player="CPU"
          onClick={handleCpuClick}
    
        />
      </div>


    </div>
  );
}

export default App
