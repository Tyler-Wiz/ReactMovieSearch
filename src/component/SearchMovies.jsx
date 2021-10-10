import React, { useState } from 'react';
import MovieCard from './MovieCard';

function SearchMovies(){
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])
     
    const searchMovies = async (e) => {
        e.preventDefault()
        // const query = 'Jurassic Park'
        const url = `https://api.themoviedb.org/3/search/movie?api_key=07a93666d4576ba91c850534210b9962&language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
            const res = await fetch(url)
            const data = await res.json()
            setMovies(data.results)
        } catch(err){
            console.log(err)
        }
    }

   const handleChange = (e) => {
      setQuery(e.target.value)
    }
    
    return (
        <>
        <form action="" className='form' onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Search</label>
            <input 
                 type="text" 
                 name="query" 
                 id="" 
                 placeholder="Matrix"
                 value={query}
                 onChange={handleChange}
              />
            <button className="button">Search Now </button>
        </form>
           <div className='card-list'>
              {movies.filter(movie => movie.poster_path).map(movie => (
                  <MovieCard movie={movie} key={movie.id} />
              ))}
           </div>
        </> 
    )
}

export default SearchMovies 