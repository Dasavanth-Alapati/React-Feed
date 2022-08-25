import React from 'react';
import  Feed  from './components/feed/feed';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <Feed/>
      </header>
    </div>
  );
}

export default App;
