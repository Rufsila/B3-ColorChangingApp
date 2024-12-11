import React, { useState } from 'react';
import './App.css';

const App = () => {
  const colors = ['white', 'violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'black'];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };

  return (
    <div className="app" style={{ backgroundColor: currentColor, height: '100vh' }}>
      <div className="container">
        <h1 style={{ color: currentColor === 'black' ? '#ffffff' : '#000000' }}>
          Select a Color
        </h1>
        <div className="buttons">
          {colors.map((color) => (
            <button
              key={color}
              style={{
                backgroundColor: color,
                color: color === 'black' || color === 'indigo' ? 'white' : 'black',
                padding: '10px 20px',
                margin: '5px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => handleChangeColor(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;