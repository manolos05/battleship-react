

export const generateRandomGameBoard = () => {
    const rows = 10;
    const cols = 10;
    const board = Array.from({ length: rows }, () => Array(cols).fill(0));
  
    const ships = [
      { name: 'Portaaviones', length: 5 },
      { name: 'Battleship', length: 4 },
      { name: 'Crucero', length: 3 },
      { name: 'Submarino', length: 3 },
      { name: 'Destructor', length: 2 },
    ];
  
    for (const ship of ships) {
      let placed = false;
      while (!placed) {
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        const startRow = Math.floor(Math.random() * rows);
        const startCol = Math.floor(Math.random() * cols);
  
        if (isValidPlacement(board, startRow, startCol, ship.length, orientation)) {
          placeShip(board, startRow, startCol, ship.length, orientation);
          placed = true;
        }
      }
    }
  
    return board;
  };
  
  // Función para verificar si es una ubicación válida para colocar un barco
  export const isValidPlacement = (board, row, col, length, orientation) => {
    const rows = board.length;
    const cols = board[0].length;
  
    // Verificar si el barco se sale del tablero
    if (
      (orientation === 'horizontal' && col + length > cols) ||
      (orientation === 'vertical' && row + length > rows)
    ) {
      return false;
    }
  
    // Verificar si la ubicación está ocupada por otro barco
    for (let i = 0; i < length; i++) {
      if (orientation === 'horizontal' && board[row][col + i] === 1) {
        return false;
      }
      if (orientation === 'vertical' && board[row + i][col] === 1) {
        return false;
      }
    }
  
    return true;
  };
  
  // Función para colocar un barco en el tablero
  export const placeShip = (board, row, col, length, orientation) => {
    for (let i = 0; i < length; i++) {
      if (orientation === 'horizontal') {
        board[row][col + i] = 1;
      } else {
        board[row + i][col] = 1;
      }
    }
  };