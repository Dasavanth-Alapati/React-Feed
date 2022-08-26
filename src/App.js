import React from 'react';
import  Feed  from './components/feed/feed';
import Login from './components/login/login';
import NavBar from './components/navbar/navbar';
import {Routes,Route } from "react-router-dom";
function App() {
  return (

    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<>Welcome</>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/Feed' element={<Feed />}/>
      </Routes>
    </div>

  );
}

export default App;
