

import { Route, Routes, useNavigate } from 'react-router-dom';
import { Home } from './pages/homePage/Home';
import './App.css';
import { FirstPage } from './pages/FirstPage/FirstPage';
import { MovieDetails } from './pages/DetailsPage/MovieDetails';
import { FavoriteMovies } from './pages/favoritPage/FavoriteMovies';
import React, {  useState } from 'react'

function App() {
  
  const [email,setEmail] = useState("")

  return(
    <div className='App'>
      <Routes>
         <Route path='/' element={<FirstPage tt={setEmail} dd={email}/>}/>
         <Route path='/home' element={<Home profile={email}/>}/>
         <Route path='/:movieId' element={<MovieDetails profile={email}/>}/>
         <Route path='/favoritmovie' element={<FavoriteMovies profile={email}/>}/>
      </Routes>
    </div>
  );
}

export default App;
