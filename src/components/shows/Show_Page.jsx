/* eslint-disable */ 
import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getShowId } from '../../API/tvmaze';
import {useQuery} from '@tanstack/react-query'
import { ShowMainData } from './ShowMainData';
import { Details } from './Details';
import { Seasons } from './Seasons';
import { Cast } from './Cast';




export const Show_Page = () => {
  const{ showId } = useParams();//literallly extract the id of the show itself so we can use it
  const {data: showData , error: showError} = useQuery({queryKey: ['show',showId], queryFn: () => getShowId(showId), refetchOnWindowFocus:false,});
  
  //returns a key/value pair from teh current url matched by the route path
  //we gave the key "showId" to be mapped as the key to the actual id from the api
  // const {showData, showError} = useShowById(showId); // Destructure the data
  if(showError){
    return <div> We have an error: {showError.message}</div>
  }
  if(showData){
    return <div>
      <ShowMainData 
      image={showData.image} 
      name={showData.name} 
      rating={showData.rating} 
      summary={showData.summary} 
      genres={showData.genres} />
      <div>
        <h2>Details</h2>
        <Details status ={showData.status} premiered={showData.premiered} network={showData.network}/>
      </div>

      <div>
      <h2>Seasons</h2>
      <Seasons seasons={showData._embedded.seasons}/>
      </div>

      <div>
      <h2>Cast</h2>
      <Cast cast={showData._embedded.cast} />

      </div>

      </div>
  }



  return (
    <div>Data is loading</div>
  )
}
