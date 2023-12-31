import { useState } from 'react';

import { Board } from './components/'
import { generateRandomGameBoard } from './utils/boardUtils';

import './App.css';


function App() {

// Estados para el posicionamiento aleatorio de los barcos 
const [cpuBoard, setCpuBoard] = useState([])
const [playerBoard, setPlayerBoard] = useState([])

 
useState(()=>{
  setCpuBoard(generateRandomGameBoard())
  setPlayerBoard(generateRandomGameBoard())
 
},[])


const handleRestartGame = () => {
  setCpuBoard(generateRandomGameBoard())
  setPlayerBoard(generateRandomGameBoard())
}






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


  // Gestión de las jugadas realizadas por la CPU:
  // En este caso tenemos dos estados, el primero realiza de manera aleatoria la jugada de la CPU
  const [ cpuCoordinate, setcpuCoordinate] = useState([])
  // En este estado almacenamos las jugadas realizadas y evitamos que se repitan 
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

  const playerWins = localStorage.getItem("Player");
  const CpuWins = localStorage.getItem("Cpu");
  return (
    <div className="app">
      <h1>Battleship Game Board</h1>


      <div
        style={{
          border: "1px solid black",
          borderRadius: "8px",
          width: "200px",
          margin: "auto",
        }}
      >
        <h2>Leaderboard</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontSize: "18px", marginRight: "20px" }}>
            <strong>Player</strong> <span>{playerWins || 0}</span>
          </div>
          <div style={{ fontSize: "18px" }}>
            <strong>Cpu</strong> <span>{CpuWins || 0}</span>
          </div>
        </div>
      </div>
      

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


      <button onClick={() => window.location.reload()}> Reinicia el Juego</button>





    </div>
  );
}

export default App
