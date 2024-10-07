// src/components/Calculator.js

import React, { useState, useEffect } from 'react'; // Importing React and useState, useEffect hooks
import './Calculator.css'; // Importing CSS for styling

const Calculator = () => {
  const [input, setInput] = useState(''); // State to hold the current input
  const [result, setResult] = useState(''); // State to hold the result

  // Function to handle button clicks
  const handleClick = (value) => {
    // Limit the input length to a maximum of 15 characters
    if (input.length < 15) {
      setInput(input + value); // Update the input state
    }
  };

  // Function to clear the input and result
  const handleClear = () => {
    setInput(''); // Reset input
    setResult(''); // Reset result
  };

  // Function to evaluate the expression and calculate the result
  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(input); // Evaluate the input expression
      setResult(evaluatedResult); // Set the result state
    } catch (error) {
      setResult('Error'); // Handle any errors during evaluation
    }
  };

  // Function to handle keyboard input
  const handleKeyPress = (event) => {
    const key = event.key;
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter', 'Backspace'];

    if (validKeys.includes(key)) {
      if (key === 'Enter') {
        handleCalculate(); // Evaluate expression on Enter key
      } else if (key === 'Backspace') {
        setInput(input.slice(0, -1)); // Remove last character on Backspace
      } else {
        handleClick(key); // Handle regular key input
      }
    }
  };

  // UseEffect to add event listener for keydown events
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress); // Add event listener

    return () => {
      window.removeEventListener('keydown', handleKeyPress); // Clean up event listener
    };
  }, [input]); // Dependencies array

  return (
    <div className="calculator"> {/* Main calculator container */}
      <h1>React Calculator</h1>
      <div className="display"> {/* Display area for input and result */}
        <div className="input">{input || '0'}</div> {/* Show current input */}
        <div className="result">{result}</div> {/* Show calculated result */}
      </div>
      <div className="buttons"> {/* Button container */}
        {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '0', '.', '=', '/'].map((button) => (
          <button
            key={button}
            onClick={() => (button === '=' ? handleCalculate() : handleClick(button))} // Handle click events
          >
            {button} {/* Display button value */}
          </button>
        ))}
        <button onClick={handleClear} className="clear">C</button> {/* Clear button */}
      </div>
    </div>
  );
};

export default Calculator; // Export the Calculator component
