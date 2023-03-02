import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import GameSalesChart from './Components/GameSalesChart/GameSalesChart';
import { Route, Routes } from 'react-router';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import SearchPage from './pages/SearchPage/SearchPage';
import VideoGameDetailPage from './pages/VideoGameDetailPage/VideoGameDetailPage';
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<SearchPage/>}/>
        <Route path='/game/:gameId' element={<VideoGameDetailPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
