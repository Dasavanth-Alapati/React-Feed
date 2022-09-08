import React, { useState } from 'react';
import  Feed  from './components/feed';
import Login from './components/login';
import NavBar from './components/navbar';
import {Routes,Route } from "react-router-dom";
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
      <Route path='/login' element={<Login setLoggedIn = {setLoggedIn}/>}/>
      <Route path='/' element={<Feed/>}/>
      </Routes>
    </div>

  );
}

export default App;
