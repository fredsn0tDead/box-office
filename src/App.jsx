/* eslint-disable */ 
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Show_Page } from './components/shows/Show_Page';

import { Home } from './pages/Home';
import { Starred } from './pages/Starred';

const queryClient = new QueryClient()
function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
     <Route exact path="/" element={<Home/> }/>
      <Route exact path="/starred" element= {<Starred/>}/> 


      <Route path='/show/:showId' /*Used router dom to map the targed id*/ element={<Show_Page/>}/>
      <Route path="*" element={<div>Not found</div>}/>
    </Routes>

  </QueryClientProvider>  
  );
}

export default App;
