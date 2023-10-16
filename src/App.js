import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homescreen from './pages/Homescreen';
import Browse from './pages/Browse';
import BrowseByGenre from './pages/BrowseByGenre';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homescreen />}></Route>
      <Route path="/browse" element={<Browse />}></Route>
      <Route path="/browsebygenre" element={<BrowseByGenre />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
