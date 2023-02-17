/* eslint-disable */ 
import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getShowId } from '../../API/tvmaze';
export const Show_Page = () => {

  const{ showId }= useParams();//returns a key/value pair from teh current url matched by the route path
  //we gave the key "showId" to be mapped as the key to the actual id from the api
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);
  useEffect(() => {
    //getShowId();
    async function fetchData(){
      try{
      const data = await getShowId(showId);
      setShowData(data);
      }
      catch (err){
        setShowError(err);
      }
    }
    fetchData();
  }, [showId]);//must pass in the showiD as a dependency if
  // we use a parameter in the useffect
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
