

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

  const handleTurn = (player ) => {
    if (currentTurn !== player) {
      return
    }
    setCurrentTurn(currentTurn === 'Player' ? 'CPU' : 'Player');
  };

  const  selectRandomPosition = (board) => {

  
    const numRows = board.length;
    const numCols = board[0].length;
    
    const randomRow = Math.floor(Math.random() * numRows);
    const randomCol = Math.floor(Math.random() * numCols);
    setCurrentTurn('Player')
    return [randomRow, randomCol];
  }
  
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
          onClick={() => {handleTurn('CPU');  setcpuCoordinate(selectRandomPosition(gameBoard))}}
    
        />
      </div>


    </div>
  );
}

export default App
