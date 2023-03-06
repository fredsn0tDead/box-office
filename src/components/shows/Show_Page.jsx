/* eslint-disable */ 
import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getShowId } from '../../API/tvmaze';
import {useQuery} from '@tanstack/react-query'




export const Show_Page = () => {
  const {data: showData , error: showError} = useQuery({queryKey: ['show',showId], queryFn: () => getShowId(showId)});
  
  const{ showId } = useParams();//returns a key/value pair from teh current url matched by the route path
  //we gave the key "showId" to be mapped as the key to the actual id from the api
  // const {showData, showError} = useShowById(showId); // Destructure the data
  if(showError){
    return <div> We have an error: {showError.message}</div>
  }
  if(showData){
    return <div>Got Show data: {showData.name}</div>
  }



  return (
    <div>Data is loading</div>
  )
}
