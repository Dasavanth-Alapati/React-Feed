import React, { useState } from 'react';
import  Feed  from './components/feed';
import Login from './components/login';
import NavBar from './components/navbar';
import {Routes,Route, Link } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { isLoggedIn } from 'axios-jwt';
import { useDispatch } from 'react-redux';
import { fetchProfile } from './services/api';
import { setProfile } from './redux/slices/profileSlice';


function App() {

  const [loggedIn,setLoggedIn] = useState(isLoggedIn());
  const dispatch = useDispatch();
  if (loggedIn)
    fetchProfile().then(res => {
      dispatch(setProfile(res.data));
    })
  return (

    <div className="App">
      <NavBar loggedIn = {loggedIn} setLoggedIn = {setLoggedIn}/>
      <Routes>
      <Route path='/' element={<Container>Welcome, please <Link to='/login'>Signin</Link> to view feed</Container>}/>
      <Route path='/login' element={<Login setLoggedIn = {setLoggedIn}/>}/>
      <Route path='/Feed' element={<Feed/>}/>
      </Routes>
    </div>

  );
}

export default App;
