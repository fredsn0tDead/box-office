/* eslint-disable */ 
import React from 'react'
import styled from 'styled-components'
export const Details = ({status, premiered, network}) => {
  return (
    <DetailsWrapper>
      <p>Status: {status}</p>
      <p>
        Premiered {premiered} {!!network  && `on ${network.name}`/*Only display data when network is true and it contains a name*/}
      </p>


    </DetailsWrapper>
  )
}
const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;