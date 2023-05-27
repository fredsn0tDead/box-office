/* eslint-disable */ 
import React from 'react'
import { useState , useEffect} from 'react'
import { useSearchStr } from '../library/useSearchstr'
import { CustomRadio } from './CustomRadio'
import styled from 'styled-components'
const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;



export const SearchForm = ({onSearch}) => {


  const [searchstr,setsearchstr] = useSearchStr('')// change the state of the input in the text box to be up
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
    <SearchInput type = "text" placeholder="Search for Something" onChange={onSearchChange} value={searchstr}/>
    <RadiosWrapper>
    <CustomRadio 
    label ="Shows"
    name = "search-option"
    value = "shows"
    checked ={searchOption === 'shows'}
    onChange={onRadioChange}/>
     <CustomRadio 
    label ="Actors"
    name = "search-option"
    value = "actors"
    checked ={searchOption === 'actors'}
    onChange={onRadioChange}/>
    </RadiosWrapper>
    <SearchButtonWrapper>
    <button type='submit'>Search</button>
    </SearchButtonWrapper>
    
    </form>
  )
}
