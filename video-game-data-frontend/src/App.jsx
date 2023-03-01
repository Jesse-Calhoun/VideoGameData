import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GameSalesChart from './Components/GameSalesChart/GameSalesChart';
import { Route, Routes } from 'react-router';
import SearchPage from './pages/SearchPage/SearchPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
