/* eslint-disable */ 

const BASE_URL = "https://api.tvmaze.com";


const apiGet = async (queryString) => {
    
    // always need to catch and handle errors when fetching api data

    const response = await fetch(`${BASE_URL}${queryString}`);
    const body  = await response.json();
    return body;

};

export const searchForShows =  (query) => apiGet(`/search/shows?q=${query}`);
export const searchForPeople =  (query) => apiGet(`/search/people?q=${query}`);
export const getShowId = (showId) => apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`);