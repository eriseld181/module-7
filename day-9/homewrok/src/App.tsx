import React from 'react';
import Home from "./components/home2"
import './App.css';
import NavBar from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home title="Hello from this stupid typeScript" />
    </div>
  );
}

export default App;
