/* eslint-disable */ 
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from './Nav'
import { Title } from './Title'

//  pass in the childern of theMainpage which is the home

export const MainPageLayout = function ({children}) {
   
    return (
    <div>
    <Title title="Box Office" subtitle="Are you looking for a TV Show or an Actor" />
    <Nav/>
    <Outlet/>
    
    
    </div> );
};
