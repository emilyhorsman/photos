import React, { useState, useEffect } from 'react';
import throttle from './throttle.js';

const getWidth = () => document.documentElement.clientWidth;
const getHeight = () => document.documentElement.clientHeight;
const getDimensions = () => {
  return {
    width: getWidth(),
    height: getHeight(),
  };
};

export const Context = React.createContext(getDimensions());

function ViewportDimensions({ children }) {
  const [dimensions, setDimensions] = useState(getDimensions());

  const handleResize = throttle(function() {
    setDimensions(getDimensions());
  }, 50);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return <Context.Provider value={dimensions}>{children}</Context.Provider>;
}

export default ViewportDimensions;
