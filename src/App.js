import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Starred } from './pages/Starred';

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home/> }/>
      <Route path="/starred" element= {<Starred/>}/>  
    </Routes>

 </>
  );
}

export default App;
