/* eslint-disable */ 
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Show_Page } from './components/shows/Show_Page';
import { Home } from './pages/Home';
import { Starred } from './pages/Starred';
import { GlobalTheme2 } from './theme';
import { MainPageLayout } from './components/MainPageLayout';
const queryClient = new QueryClient()
function App() {
  
 
  

  return (
    <QueryClientProvider client={queryClient}>
    <GlobalTheme2>
    
    <Routes>
    <Route element={<MainPageLayout/>}>
     <Route exact path="/" element={<Home/> }/>
      <Route exact path="/starred" element= {<Starred/>}/> 
      </Route>

      <Route path='/show/:showId' /*Used router dom to map the targed id*/ element={<Show_Page/>}/>
      <Route path="*" element={<div>Not found</div>}/>
      </Routes>
    
    </GlobalTheme2>
  </QueryClientProvider>  
  );
}

export default App;
