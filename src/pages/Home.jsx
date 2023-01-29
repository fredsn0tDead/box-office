/* eslint-disable */ 
import { useState , React} from 'react'
import { MainPageLayout } from '../components/MainPageLayout'

// const pages = {
//   home: 'HomePage',
//   starred: 'Starred',

// }
export const Home = function ()  {
  // const {home, starred} = pages
  const [searchstr,setsearchstr] = useState('')// change the state of the input in the text box to be up
//we are going to use the target to 
  // were are checking if the state has been updated
  const onSearchChange = (ev) =>{//takes the parameter the event object //we are going to use the target to 

    setsearchstr(ev.target.value);//we are now getting the actual input typed in the box we have updated the state of the value now
  
  };
  const onSearch = async (ev) => {
  ev.preventDefault();
  const response =  await fetch(`https://api.tvmaze.com/search/shows?q=${searchstr}`)
  //made the response dynamic by adding in string interpolation to add the change in state to the fetch api
  //the q${input} allows us to dynamically call the current setInput in the input box to the api call
  const body = await response.json();
  console.log(body);

    //ev.preventDefault();
    //Event interference that tells the user if the event isnt handled so event is given its default action should not be done
    // in this case instead of defaulting submitting the form to nothing instead it will just do nothing when the button is pressed

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
    <button type='submit'>Search</button>
    </form>
    
    

    </div>
  )
}
