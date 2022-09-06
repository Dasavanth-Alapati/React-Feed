import React from 'react';
import  Feed  from './components/feed';
import Login from './components/login';
import NavBar from './components/navbar';
import {Routes,Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
function App() {
  return (

    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<Container>Welcome, please <Link to='/login'>Signin</Link> to view feed</Container>}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/Feed' element={<Feed />}/>
      </Routes>
    </div>

  );
}

export default App;
