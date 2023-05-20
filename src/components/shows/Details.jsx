/* eslint-disable */ 
import React from 'react'

export const Details = ({status, premiered, network}) => {
  return (
    <div>
      <p>Status: {status}</p>
      <p>
        Premiered {premiered} {!!network  && `on ${network.name}`/*Only display data when network is true and it contains a name*/}
      </p>


    </div>
  )
}
