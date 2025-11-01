import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🍺 BrewQuest</h1>
        <p>Find your next favorite brewery</p>
      </header>
      <div className="app-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
