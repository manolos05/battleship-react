

import React, { useState } from 'react';

export const Cells = ({ value , showShips }) => {

  const [cellValue, setcellValue] = useState("");
  

  const handleClick = () => {
    value === 1 ? setcellValue('hit') : setcellValue('clicked')
  }

  return (
    <div
     className={`cell ${value === 1 && showShips ? 'ship' : 'empty'} ${cellValue}`} 
      onClick={handleClick}
    ></div>
  );
};