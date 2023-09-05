

import React, { useState, useEffect } from 'react';

export const Cells = ({ value , showShips , cellClicked, onClick }) => {

  const [cellValue, setCellValue] = useState("");
  

  const handleClick = () => {
    onClick()
    if (value === 1) {
      setCellValue('hit');
    } else {
      setCellValue('clicked');
    }
  
  }

  useEffect(() => {
    if ( cellClicked ) {
      handleClick()
    }
  }, [cellClicked])
  


  return (  

    <>
    <div
        className={`cell ${value === 1 && showShips ? 'ship' : 'empty'} ${cellValue}`}  
      onClick={handleClick}
    
      

      
    ></div>
    
   

    </>
  );
};