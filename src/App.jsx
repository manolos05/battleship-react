

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

  const [currentTurn, setCurrentTurn] = useState('Player');

  const handleTurn = (playerNumber, event ) => {
    if ((playerNumber === 'Player' && currentTurn === 'CPU') || (playerNumber === 'CPU' && currentTurn === 'Player')) {
      event.preventDefault(); 
       alert('Wrong Board')
      
    }
    setCurrentTurn(currentTurn === 'Player' ? 'CPU' : 'Player');
  };

  return (
    <div className="app">
      <h1>Battleship Game Board</h1>

      <div className="main">
        <Board
          gameBoard={gameBoard}
          playerNumber="Player"
          onClick={(event) => handleTurn('Player', event)}

        />
        <Board
          gameBoard={gameBoardCPU}
          playerNumber="CPU"
          onClick={(event) => handleTurn('CPU', event)}

        />
      </div>


    </div>
  );
}

export default App
