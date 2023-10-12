import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import Card from './Card';


//9cfc66a8
const API_URL = 'http://www.omdbapi.com?apikey=b6003d8a';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const search = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    useEffect( ()=> {
        searchTerm('Marvel');
    },[]);

    return(
       <div className="app">
        <h1>A-Z MOVIES</h1>
        <div className="search">
            <input 
            placeholder="Search movies"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src = {SearchIcon}
            alt = "Search Icon"
            onClick={()=>search(searchTerm)} />
        </div>
        {
            movies?.length > 0
            ?(
            <div className="container">
                {movies.map((movie) => (
                    <Card movie={movie} />
                ) ) }
            </div>
            ):(
                <div className="empty">
                    <h2>No movies found!</h2>
                    </div>
            )
        }

       </div>
    );
}

export default App;
