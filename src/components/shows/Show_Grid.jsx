/* eslint-disable */ 
import { useReducer,useEffect } from 'react'
import React from 'react'
import { Show_Card } from './Show_Card'
import { useStarredShows } from '../../library/useStarredShows';
import { FlexGrid } from '../Common/FlexGrid';

export const Show_Grid = ({shows}) => {

  const [starredShows,dispatchStarred] = useStarredShows();

  
  const onStarMeClick = (showId) => {

    //logic for when the star is clicked
    const isStarred = starredShows.includes(showId);

    if(isStarred){
      dispatchStarred({type: 'UNSTAR', showId});
    }
    else{
      dispatchStarred({type: 'STAR', showId});
    }

  };

  return (
    <FlexGrid>
        {shows.map(data => ( 
        <Show_Card key = {data.show.id} 
        id={data.show.id}
        name={data.show.name} 
        image={data.show.image? data.show.image.medium : '/project_not_found.png' }
        summary= {data.show.summary}
        onStarMeClick={onStarMeClick}
        isStarred={starredShows.includes(data.show.id)}
        //.includes check if the show id is inside the starred array
        />// map the shows name with the imaage
        ))}


    </FlexGrid>
  )
}
