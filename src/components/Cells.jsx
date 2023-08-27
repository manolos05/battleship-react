

import React, { useState } from 'react';

export const Cells = ({ value , showShips   }) => {

  const [cellValue, setCellValue] = useState("");
  

  const handleClick = () => {
    if (value === 1) {
      setCellValue('hit');
    } else {
      setCellValue('clicked');
    }
  
  }


  return (  

    <>
    <div
     className={ `cell ${value === 1  && showShips  ? 'ship' :  'empty'} ${cellValue}  `} 
      onClick={handleClick}
      
    ></div>
    
   

    </>
  );
};