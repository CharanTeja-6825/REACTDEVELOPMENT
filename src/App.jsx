import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import { MovieCard } from "./components/MovieCard";
import { useDebounce } from "react-use";
import { updateSearchCount } from "./appwrite";
// import "./index.css"

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method : "GET",
  headers : {
    accept : "application/json",
    Authorization : `Bearer ${API_KEY}`
  },
}

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  useDebounce(() => setDebounceSearchTerm(searchTerm), 1000, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

      try {
        const endpoint = query 
        ? `${API_BASE_URL}/search/movie?query=${encodeURI(query)}`
        :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch(endpoint, API_OPTIONS);

        // console.log(response);

        if(!response.ok){
          throw new Error('Failed to fetch movies, try again later.');
        }

        const data = await response.json();

        if(data.Response === 'False'){
          setErrorMessage(data.Error || 'Failed to fetch Movies');
          setMovies([]);
          return;
        }

        setMovies(data.results || []);

        if(query && data.results.length > 0){
          await updateSearchCount(query, data.results[0]);
        }
      } catch (error) {
        console.error(`Error fetching Movies : ${error.message}`);
        setErrorMessage('Error fetching Movies, Try again later.');
      }finally{
        setIsLoading(false);

      }
    }
  useEffect(() => {
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]);
  return(
    <main>
      <div className="pattern" />
      <div className="wrapper">

        <header>
          <img src="../public/hero-img.png" alt="" />
          <h1>Find <span className="text-gradient">Movies</span> you'll enjoy without hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>
        
        <section className="all-movies">
          <h2 className="mt-[20px]">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movies.map((movie, ind) => (  
                // <p key={ind} className="text-white">{movie.title}</p>
                <MovieCard movie={movie} key={ind} />
              ))}
            </ul>
          )}

          {/* {errorMessage && <p className="error-message text-red-500 font-bold">{errorMessage}</p>} */}
        </section>
      </div>
    </main>
  )
}

export default App;


















// import "./index.css";
// import { useEffect, useState } from "react";

{/*
  React components follow pascal case where component
  name looks like "ComponentName".

  Types of Components in React ->

  1.Functional Component : Functional component in react
  is the most famous and flexible way of creating a component.

  2.Class Component : Class Components in react are less flexible in react
  compared to the functional component so we avoid class components.

  React Props : 

    In any web application you cannot or won't be 
    displaying same data in multiple items you will be displaying
    same component with different data and this is where
    the concept of props comes in :

      -> we pass some values to the component we are going
      to display and destructure the values in the arguments section
      of the functional component and use them in the component.
  
  State in React : 

    state in react is how a property is behaving based on an event
    state modifies the existing value of any property using state

    Ex := const [stateVariable, setterMethod] = useState(initialValue);
     -> setter method here is used to set the new value of state variable
     setterMethod(newStateValue) => console.log(stateVariable) output = newStateValue

  useEffect in react :
    -> useEffect in react is used track changes and run side effects when components are rendered on the webpage
    and there are three types if side-effect renders in useEffect ->
    -> UseEffect takes two arguments : the side effect code and the optional
    dependency array to control the when the side-effect code should be run
    
    No dependency : This is not recommended because it renders the side-effects multiple times.
    Empty dependency : This is rendered only single time on mount.
    With Dependecy : This is rendered only if there is any change made to the dependencies inside the dependency array.
    
*/}

// Check out the Below practical Example of React


// const SampleCard = ({ title }) => {
//   const [count, setCount] = useState(0);
//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     console.log(`${title} is ${liked? 'Liked' : 'Disliked'}`)
//   }, [liked]);

//   return(
//     <div className="card" onClick={() => {setCount(count+1)}}>
//       {title}
//       <button onClick={() => {
//         setLiked(!liked);
//       }}>
//         {!liked ? '🤍' : '❤️'}
//       </button>
      
//       <p>{count || null}</p>
//     </div>
//   )
// }


// const App = () => {
//  return(
//   <div className="card-container">
//     {/* <h2>This is a arrow function app</h2> */}
//     <SampleCard title="Bahubali"/>
//     <SampleCard title="Interstellar"/>
//     <SampleCard title="Blue Lock"/>
//     <SampleCard title="One Piece"/>
//   </div>
  
//  )
// }

// export default App
