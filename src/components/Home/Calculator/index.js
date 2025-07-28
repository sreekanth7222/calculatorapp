import React, { useState } from 'react';
import './index.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  // This function handles all button clicks
  const handleClick = (value) => {
    if (value === 'C') {
      // Clear the display
      setDisplay('0');
    } else if (value === '=') {
      // Evaluate the expression using eval()
      // Note: eval() can be a security risk in other contexts, but is safe here
      // as the input is controlled by our buttons.
      try {
        // eslint-disable-next-line no-eval
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      // Append the clicked value to the display
      // If the current display is '0' or 'Error', replace it
      if (display === '0' || display === 'Error') {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">{display}</div>
        <div className="buttons">
          <button onClick={() => handleClick('C')} className="button clear span-two">C</button>
          <button onClick={() => handleClick('/')} className="button operator">/</button>
          <button onClick={() => handleClick('*')} className="button operator">*</button>
          
          <button onClick={() => handleClick('7')} className="button">7</button>
          <button onClick={() => handleClick('8')} className="button">8</button>
          <button onClick={() => handleClick('9')} className="button">9</button>
          <button onClick={() => handleClick('-')} className="button operator">-</button>

          <button onClick={() => handleClick('4')} className="button">4</button>
          <button onClick={() => handleClick('5')} className="button">5</button>
          <button onClick={() => handleClick('6')} className="button">6</button>
          <button onClick={() => handleClick('+')} className="button operator">+</button>

          <button onClick={() => handleClick('1')} className="button">1</button>
          <button onClick={() => handleClick('2')} className="button">2</button>
          <button onClick={() => handleClick('3')} className="button">3</button>
          <button onClick={() => handleClick('=')} className="button equals span-two-rows">=</button>
          
          <button onClick={() => handleClick('0')} className="button span-two">0</button>
          <button onClick={() => handleClick('.')} className="button">.</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
