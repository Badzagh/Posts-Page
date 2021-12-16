import { useEffect, useReducer, useState } from "react";
import PostList from "./PostList";


function reducer (state, action){
    return { 
        ...state,
        posts: action.payload
    }
}



function DataFetching() {
    const [state, dispatch] = useReducer(reducer, { posts: []});

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            async function getResponse() {
                await fetch('https://jsonplaceholder.typicode.com/posts', { signal: abortCont.signal })
                .then((response) => response.json())
                .then((data) => {
                    dispatch({ payload: data})
                    console.log(data, "its posts")
                })
                
            };
            
            getResponse();
        }, 100);
            
        return () => abortCont.abort();
    }, [])
    
    

    return (
        <>
            <PostList posts ={state.posts}/>
        </>
    )
}

export default DataFetching;