import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AstroidUsers from './Components/AstroidUsers';
import RandomeUser from './Components/RandomeUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AstroidUsers />} />
        <Route path='/RandomeUser' element={<RandomeUser />} />
      </Routes>
    </div>
  );
}

export default App;
