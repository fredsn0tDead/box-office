/* eslint-disable */ 
import { searchForShows } from '../API/tvmaze';
import {useQuery} from '@tanstack/react-query';
import { useState  ,useReducer, React} from 'react'
import { MainPageLayout } from '../components/MainPageLayout'
import { searchForPeople } from '../API/tvmaze';
import { SearchForm } from '../components/SearchForm';
import { Show_Grid } from '../components/shows/Show_Grid';
import { Actor_Grid } from '../components/actors/Actor_Grid';
import styled ,{css, ThemeProvider} from 'styled-components'//assume this is a default export
import { TextCenter } from '../components/Common/TextCenter';


export const Home = function ()  {
  

  
  const [filter, setFilter] = useState(null);

  

  const { data:apiData, error:apiDataError } = useQuery({
      queryKey: ['search', filter],
      queryFn: () => 
      filter.searchOption === 'shows'
        ? searchForShows(filter.searchstr)
        : searchForPeople(filter.searchstr),
      //filter changes when ever we press the search button
      enabled: !!filter,//;let react query know when we want to run and not run the fetch function
      refetchOnWindowFocus: false,
      
    });
    console.log(filter)
  const onSearch = async ({searchstr, searchOption}) => {//we passed in the options and destructured it 
    
    setFilter({searchstr , searchOption});
};//Event interference that tells the user if the event isnt handled so event is given its default action should not be done
// in this case instead of defaulting submitting the form to nothing instead it will just do nothing when the button is pressed

  const renderapiData = () => {
      if (apiDataError){
        return <TextCenter> Error occured: {apiDataError.message} </TextCenter>
        //return a div element in the same place where the shows our outputted to

      }
      if (apiData ?.length  === 0){
        return <TextCenter>No Results</TextCenter>
      }

      if (apiData){
        return apiData[0].show ? (
        <Show_Grid shows={apiData}/>
        ) :( 
        <Actor_Grid actors = {apiData}/>
        );

      }
      return null;
  };
  //Introduce one way data binding only the the state is updated console "Frederick" but the input text box was not updated
  //Two way binding we update the text as well as the input
  return (
    //https://api.tvmaze.com/search/shows?q=sword
    // use fetch to return a promise
    //fetch('https://api.tvmaze.com/search/shows?q=sword').then()
    <div>
     
    
  
    
    <SearchForm onSearch={onSearch}/>
    
    <div> 
      {renderapiData()}
    </div> 
    
    

    </div>
  )
}
