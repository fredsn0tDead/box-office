/* eslint-disable */ 
import React from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { getShowId } from '../../API/tvmaze';
import {useQuery} from '@tanstack/react-query'
import { ShowMainData } from './ShowMainData';
import { Details } from './Details';
import { Seasons } from './Seasons';
import { Cast } from './Cast';
import styled from 'styled-components';
import { TextCenter } from '../Common/TextCenter';


export const Show_Page = () => {
  const{ showId } = useParams();//literallly extract the id of the show itself so we can use it
  const {data: showData , error: showError} = useQuery({queryKey: ['show',showId], queryFn: () => getShowId(showId), refetchOnWindowFocus:false,});
  const navigateTo = useNavigate();//initialize our variable
  // const onGoBack = () =>{

  //   navigateTo('/');//simply nagivgate back to the home page

  // };
  //returns a key/value pair from teh current url matched by the route path
  //we gave the key "showId" to be mapped as the key to the actual id from the api
  // const {showData, showError} = useShowById(showId); // Destructure the data
  if(showError){
    return <div> We have an error: {showError.message}</div>
  }
  if(showData){
    return <ShowPageWrapper>
      <Link to='/'>Go Back to home</Link>
      {/* <button type='button' onClick={onGoBack}>Go back to home</button> */}

      <ShowMainData 
      image={showData.image} 
      name={showData.name} 
      rating={showData.rating} 
      summary={showData.summary} 
      genres={showData.genres} />
      <InfoBlock>
        <h2>Details</h2>
        <Details status ={showData.status} premiered={showData.premiered} network={showData.network}/>
      </InfoBlock>

      <InfoBlock>
      <h2>Seasons</h2>
      <Seasons seasons={showData._embedded.seasons}/>
      </InfoBlock>

      <InfoBlock>
      <h2>Cast</h2>
      <Cast cast={showData._embedded.cast} />

      </InfoBlock>

      </ShowPageWrapper>
  }



  return (
    <TextCenter>Data is loading</TextCenter>
  )
}
const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;

const InfoBlock = styled.div`
  margin-bottom: 40px;
  h2 {
    margin: 0;
    margin-bottom: 30px;
    font-size: 22px;
  }
`;