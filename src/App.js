import React from 'react'; // Importing React
import Calculator from './components/Calculator'; // Importing the Calculator component
import './App.css'; // Importing CSS for app styling

const App = () => {
  return (
    <div className="App"> {/* Main application container */}
      <Calculator /> {/* Rendering the Calculator component */}
    </div>
  );
};

export default App; // Exporting the App component
