import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Details from './pages/Details/Details.js'
import { Navbar } from 'react-bootstrap';
import Popular from './pages/page/Movies/Popular/Popular';
import Upcoming from './pages/page/Movies/Upcoming/Upcoming';
import NowPlaying from './pages/page/Movies/NowPlaying/NowPlaying';
import TopRated from './pages/page/Movies/TopRated/TopRated';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
        <Route path='/nowPlaying' element={<NowPlaying/>}/>
        <Route path='/topRated' element={<TopRated/>}/>
      </Routes>
    </BrowserRouter>
);


