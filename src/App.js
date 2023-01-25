import React from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    
    <Routes>
      <Route exact path="/" element={ <div>This is hompage</div> }/>
      <Route path="/about" element= {<h2>This is the about page
        
      </h2>}/>  
    </Routes>

 
  );
}

export default App;
