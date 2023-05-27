/* eslint-disable */ 
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { TextCenter } from '../components/Common/TextCenter';
import { useStarredShows } from '../library/useStarredShows';
import { getShowIds } from '../API/tvmaze';
import { Show_Grid } from '../components/shows/Show_Grid';
export const Starred = function () {

  const  [starredShowsIds] = useStarredShows();

  //default use useeffect but we have implemented a data fetching library
  const { data:starredShows, error:starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn:  () => getShowIds(starredShowsIds).then(result=> 
      result.map(show=>({show}))),
    refetchOnWindowFocus: false,
    
  });

  if(starredShows && starredShows.length>0){
    return (
     
      <div> <Show_Grid shows={starredShows}/> </div>
    )
  }
  if(starredShows && starredShows.length==0){
    return(
      <TextCenter> No shows Starred </TextCenter>
    )
    }
  if(starredShowsError){
    return( 
      <TextCenter>Error has occurred: {starredShowsError.message}; </TextCenter>
    )
    };
  return (
    <TextCenter>Shows are loading</TextCenter>
  )

};
