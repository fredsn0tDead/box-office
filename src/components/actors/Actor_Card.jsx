/* eslint-disable */ 
import React from 'react'
import { Link } from 'react-router-dom'

export const Actor_Card = ({name , image, gender, country, birthday, deathday}) => {
   
  
    return (
      <div>
  
          <div>
              
               <img src={image} alt={name}/>
               
          </div>
  
          <h1>{name} {!!gender &&  /* We are turnning gender into a boolean value to determine if a gender is given then use conditional
          then use conditional rendering only show gender if given with && operator we applied DOUBLE NEGATION to change gender to boolean */ 
          `(${gender})`}</h1>
          <p>{country ? `Comes from $(country)` : `No country known`}</p>
          {!!birthday && <p> Born {birthday}</p>/* Applied conditional rendering to only display birth day if given*/ }
          <p> {deathday ? `Died $(deathday)` : 'Alive'}</p>
                        
  
          <div>
              <Link to='/' >Read More/Link</Link>
              <button type = "button">Star me</button>
  
          </div>
  
  
      </div>
  )
}
