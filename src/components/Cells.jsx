

import React, { useState } from 'react';

export const Cells = ({ value }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div
      className={`cell ${value === 1 ? 'ship' : 'empty'} ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    ></div>
  );
};