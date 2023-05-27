/* eslint-disable */ 
import styled from 'styled-components'
import React from 'react'
import { Actor_Card } from './Actor_Card'
import { FlexGrid } from '../Common/FlexGrid'
export const Actor_Grid = ({actors}) => {
  return (
    <FlexGrid>
       {actors.map(data => ( 
        <Actor_Card key = {data.person.id} 
        id={data.person.id}
        name={data.person.name} 
        country = {data.person.country ? data.person.country.name : null}
        birthday={data.person.birthday}
        deathday = {data.person.deathday}
        gender={data.person.gender}
        image={data.person.image? data.person.image.medium : '/project_not_found.png' }
       
        />// map the shows name with the imaage
        ))}



    </FlexGrid>
  )
}
