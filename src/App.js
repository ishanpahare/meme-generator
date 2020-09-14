import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MemeGenerator from './components/MemeGenerator';

function App() {
  return ( 
    <div>
      <Header></Header>
    <MemeGenerator></MemeGenerator>
    </div>
  );
}

export default App;
