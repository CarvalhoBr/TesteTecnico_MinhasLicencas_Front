import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact/>
    </BrowserRouter>
  );
}

export default App;
