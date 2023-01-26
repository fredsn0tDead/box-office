import React from 'react'
import { Nav } from './Nav'
import { Title } from './Title'

//  pass in the childern of theMainpage which is the home

export const MainPageLayout = function ({childern}) {
   
    return (
    <div>
    <Title title="Box Office" subtitle="Are you looking for a movie or an actor" />
    <Nav/>
    <h1>{childern}</h1>
    
    
    </div> )
}
