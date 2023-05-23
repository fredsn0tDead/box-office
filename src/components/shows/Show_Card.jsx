/* eslint-disable */ 

import React from 'react'
import { Link } from 'react-router-dom'

export const Show_Card = ({name, image,id, summary,onStarMeClick}) => {

  const summaryStripped = summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,'') : 'No description'
  //We are taking the original descritopn <p> tag taken from the API and only displaying the first 10 characters and using
  // the regular expression /<.+?>/g,'') to strip all the html

  return (
    <div>

        <div>
            <h1>{name}</h1>
             <img src={image} alt={name}/>
             
        </div>

        <h1>{name}</h1>
        <p>{summaryStripped}</p>

        <div>
            <a href={`/show/${id}`/*Created ad dynamic page to get the id of each card*/} target='_blank' rel="moreferrer">Read More/Link</a>
            <button type = "button" onClick={()=> onStarMeClick(id)}>Star me</button>

        </div>


    </div>
  )
}
