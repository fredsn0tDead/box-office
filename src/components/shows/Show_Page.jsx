/* eslint-disable */ 
import React from 'react'
import { useParams } from 'react-router-dom';
export const Show_Page = () => {

  const{ showId }= useParams();//returns a key/value pair from teh current url matched by the route path
  //we gave the key "showId" to be mapped as the key to the actual id from the api
  


  return (
    <div>Show_Page for {showId}</div>
  )
}
