

import React, { useState, useEffect } from 'react';

export const Cells = ({ value , showShips , cellClicked }) => {

  const [cellValue, setCellValue] = useState("");
  

  const handleClick = () => {
    if (value === 1) {
      setCellValue('hit');
      alert('hola')
    } else {
      setCellValue('clicked');
    }
  
  }

  useEffect(() => {
    if ( cellClicked ) {
      handleClick();
    }
  }, [cellClicked])
  


  return (  

    <>
    <div
        className={`cell ${value === 1 && showShips ? 'ship' : 'empty'} ${cellValue}  `} 
      onClick={handleClick}

      
    ></div>
    
   

    </>
  );
};