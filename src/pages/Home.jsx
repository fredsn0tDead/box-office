import React from 'react'
import { MainPageLayout } from '../components/MainPageLayout'

// const pages = {
//   home: 'HomePage',
//   starred: 'Starred',

// }

export const Home = function ()  {
  // const {home, starred} = pages
  return (
    <MainPageLayout childern={<h1>Yessir</h1>}/>
  )
}
