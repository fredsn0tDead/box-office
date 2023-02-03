/* eslint-disable */ 
import React from 'react'
import { useState } from 'react'

export const SearchForm = ({onSearch}) => {
  const [searchstr,setsearchstr] = useState('')// change the state of the input in the text box to be up
//we are going to use the target to 
  const[searchOption, setSearchOption] = useState('shows')//set the default state to the input shows
  const onSearchChange = (ev) =>{//takes the parameter the event object //we are going to use the target to 

    setsearchstr(ev.target.value);//we are now getting the actual input typed in the box we have updated the state of the value now
  
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = (ev) =>{
    ev.preventDefault();
    const options = {
      searchstr,
      searchOption, //two properties searchstr and searchoptions when an option is chosen 
    };
    onSearch(options);
  };
  return (
    <form onSubmit={onSubmit}>
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
  )
}
