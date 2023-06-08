import React, { Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Home from './pages/home/Home';
import Loader from './components/loaders/Loader';

// let Home = React.lazy(() => import('./pages/home/Home'));


function App() {

  const route = (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path='/home' element={<Loader />} ></Route>
    </Routes>
  )

  return (
    <div className='app'>
      {/* <Home /> */}
      <BrowserRouter>{route}</BrowserRouter>
    </div>
  );
}

export default App;
