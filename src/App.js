import React from 'react';
import Home from './Home';
import Movie from './Movie';
import Error from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {
  return <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<Movie />} />
        <Route path='*' element={<Error />} />
      </Routes>
  </>
}

export default App;