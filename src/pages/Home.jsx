/* eslint-disable */ 
import { searchForShows } from '../API/tvmaze';
import { useState , React} from 'react'
import { MainPageLayout } from '../components/MainPageLayout'
import { searchForPeople } from '../API/tvmaze';
// const pages = {
//   home: 'HomePage',
//   starred: 'Starred',

// }
export const Home = function ()  {
  // const {home, starred} = pages
  const [searchstr,setsearchstr] = useState('')// change the state of the input in the text box to be up
//we are going to use the target to 
  // were are checking if the state has been updated
  const[apiData,setapiData] = useState(null);
  const[searchOption, setSearchOption] = useState('shows')//set the default state to the input shows
  const[apiDataError, setapiDataError] = useState(null);
  console.log(searchOption);
  const onSearchChange = (ev) =>{//takes the parameter the event object //we are going to use the target to 

    setsearchstr(ev.target.value);//we are now getting the actual input typed in the box we have updated the state of the value now
  
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };
 
  const onSearch = async (ev) => {
     ev.preventDefault();
    
    try{
      setapiDataError(null);
    
      if (searchOption === 'shows'){
        const result = await searchForShows(searchstr);
        setapiData(result);
      }
      else{
        const result = await searchForPeople(searchstr);
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
    <form onSubmit={onSearch}>
    <input type = "text" onChange={onSearchChange} value={searchstr}/>

    <label>
      Shows
      <input type='radio' name='search-option' value='shows' checked={searchOption === 'shows'} onChange={onRadioChange}/>
    </label>
    <label>
      Actors
      <input type='radio' name='search-option' value='actors' checked={searchOption ==='actors'} onChange={onRadioChange}/>
    </label>

    <button type='submit'>Search</button>
    </form>
    <div>
      {renderapiData()}


    </div>
    
    

    </div>
  )
}
