/* eslint-disable */ 

import { useEffect,useState } from "react";
import { json } from "react-router-dom";

const usePersistedStated = (intitalState,sessionStorageKey) => {//pass an intial state

    const [state, setState] =  useState(() => {
        const persistedValue = sessionStorage.getItem(sessionStorageKey);
        return persistedValue ? JSON.parse(persistedValue) :intitalState;
   
   
    });
    useEffect(() => {
            sessionStorage.setItem(sessionStorageKey,JSON.stringify(state));

    }, [state,sessionStorageKey]);
    return [state,setState];
};



export const useSearchStr = () => {
    const [state,setState] = usePersistedStated('','searchString')
    return [state,setState];

};