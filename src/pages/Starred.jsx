/* eslint-disable */ 

import React from 'react'
import { MainPageLayout } from '../components/MainPageLayout'
import { useStarredShows } from '../library/useStarredShows';
export const Starred = function () {

  const  [starredShows] = useStarredShows();

  return (
    <MainPageLayout childern={
    <div>
        Starred Page, starred {starredShows.length}



    </div>}/>
  )
}
