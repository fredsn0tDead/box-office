/* eslint-disable */ 
import { useRef } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SearchCard,SearchImgWrapper } from '../Common/SearchCard'
import { StarIcon } from '../Common/StarIcon'
export const Show_Card = ({name, image,id, summary,onStarMeClick,isStarred}) => {

  const summaryStripped = summary ? summary.split(" ").slice(0,10).join(' ').replace(/<.+?>/g,'') + '...' : 'No description'
  //We are taking the original descritopn <p> tag taken from the API and only displaying the first 10 characters and using
  // the regular expression /<.+?>/g,'') to strip all the html

  const starBtnRef =  useRef(); //gives you back a hook that you then reference
  //starBetnref is a native html element because it is still just a button
  //equivlanent to document.getElementByID('id')
  //we can manipluate the class name directly
  const handleStarClick = () =>{
    onStarMeClick(id);
    const starBtnEl = starBtnRef.current;
    if(!starBtnEl) return;

    if (isStarred){
      starBtnEl.classList.remove('animate');
        //when its starred we want to remove the animation since it is starred
    }
    else{
      starBtnEl.classList.add('animate')
    }
  }
  return (
    <SearchCard>

        <SearchImgWrapper>
            
             <img src={image} alt={name}/>
             
        </SearchImgWrapper>

        <h1>{name}</h1>
        <p>{summaryStripped}</p>

        <ActionSection>
            <a href={`/show/${id}`/*Created ad dynamic page to get the id of each card*/} target='_blank' rel="moreferrer">Read More/Link</a>
            <StarBtn
            ref={starBtnRef} //can only be passed to native html elements
             type = "button" 
             onClick={handleStarClick}
               >
              
              <StarIcon active={isStarred}/>
            </StarBtn>
              
        </ActionSection>


    </SearchCard>
  )
}
const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;