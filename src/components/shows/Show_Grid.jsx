/* eslint-disable */ 
import { useReducer,useEffect } from 'react'
import React from 'react'
import { Show_Card } from './Show_Card'
import { useStarredShows } from '../../library/useStarredShows';

// const usePersistedReducer = (reducer, initialState, localStorageKey) =>{

//   const[state, dispatch] = useReducer(reducer,initialState,(inital)=> {
//       const persistedValue = localStorage.getItem(localStorageKey)


//       return persistedValue ? JSON.parse(persistedValue) : inital;
  
//     });
//     useEffect(()=> {
//         localStorage.setItem(localStorageKey, JSON.stringify(state))
      

//     },
//      [state, localStorageKey])//passed the dependency array
//      //if the state changes or the localStorageKey changes,please run the callback(run the function)
//     return [state,dispatch]
//     //final state built ontop usereducer synchronize the state with useReducer
// };
//{type:'STAR', showId: ''}
//{type: "UNSTAR", showId:''}

// const starredShowsReducer = (currentStarred, action) => {

//   switch(action.type){
//     case 'STAR': return currentStarred.concat(action.showId);//whatever showId returned add it to the star array
//     case 'UNSTAR': return currentStarred.filter((showId)=> showId !==action.showId);//use filter to create a new array that statisfies the condition
//    //remove the current showId from the array so it will keep all showId that are not the current one
//     default:
//       return currentStarred;
//   };
// };

export const Show_Grid = ({shows}) => {

  const [starredShows,dispatchStarred] = useStarredShows();

  
  const onStarMeClick = (showId) => {

    //logic for when the star is clicked
    const isStarred = starredShows.includes(showId);

    if(isStarred){
      dispatchStarred({type: 'UNSTAR', showId});
    }
    else{
      dispatchStarred({type: 'STAR', showId});
    }

  };

  return (
    <div>
        {shows.map(data => ( 
        <Show_Card key = {data.show.id} 
        id={data.show.id}
        name={data.show.name} 
        image={data.show.image? data.show.image.medium : '/project_not_found.png' }
        summary= {data.show.summary}
        onStarMeClick={onStarMeClick}
        isStarred={starredShows.includes(data.show.id)}
        //.includes check if the show id is inside the starred array
        />// map the shows name with the imaage
        ))}


    </div>
  )
}
