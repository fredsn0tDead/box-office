/* eslint-disable */ 
import { searchForShows } from '../API/tvmaze';
import { useState , React} from 'react'
import { MainPageLayout } from '../components/MainPageLayout'
import { searchForPeople } from '../API/tvmaze';
import { SearchForm } from '../components/SearchForm';
// const pages = {
//   home: 'HomePage',
//   starred: 'Starred',

// }
export const Home = function ()  {
  // const {home, starred} = pages
  

  const[apiData,setapiData] = useState(null);
  const[apiDataError, setapiDataError] = useState(null);
  
  
  
 
  const onSearch = async ({searchstr, searchOption}) => {//we passed in the options and destructured it 
    
    
    try{
      setapiDataError(null);
      let result;  
    
      if (searchOption === 'shows'){
        result = await searchForShows(searchstr);
        setapiData(result);
      }
      else{
        result = await searchForPeople(searchstr);
        setapiData(result);  
      }
  
    
    }
    catch (error){
      setapiDataError(error);
      //uses the searchForshows from the tvmaze in ordder to check for an error once it does throws an erro which is caught and set to apiDataError
    };
  
    //Event interference that tells the user if the event isnt handled so event is given its default action should not be done
    // in this case instead of defaulting submitting the form to nothing instead it will just do nothing when the button is pressed
};

  const renderapiData = () => {
      if (apiDataError){
        return <div> Error occured: {apiDataError.message} </div>
        //return a div element in the same place where the shows our outputted to

      }

      if (apiData){
        return apiData[0].show ? apiData.map((data) => (
        <div key= {data.show.id} >{data.show.name}</div>
        )) :  apiData.map((data) => (
          <div key= {data.person.id} >{data.person.name}</div>
          ));

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
    
    <MainPageLayout/>
    <SearchForm onSearch={onSearch}/>
    
    <div> 
      {renderapiData()}
</div> 
    
    

    </div>
  )
}
