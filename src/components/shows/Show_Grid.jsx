/* eslint-disable */ 

import React from 'react'
import { Show_Card } from './Show_Card'

export const Show_Grid = ({shows}) => {
  return (
    <div>
        {shows.map(data => ( 
        <Show_Card key = {data.show.id} 
        id={data.show.id}
        name={data.show.name} 
        image={data.show.image? data.show.image.medium : '/project_not_found.png' }
        summary= {data.show.summary}
        />// map the shows name with the imaage
        ))}


    </div>
  )
}
