import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    
      <section className='movie-page'>
        <div className='grid grid-4-col'> {movie.map((curMovie)=>{
          const {imdbID,Title,Poster}= curMovie;
          return(

            <div>
              
             <h2>{Title}</h2>
            <NavLink to={`movie/${imdbID}`}>
            <div className='card'>
                <div className='card-info'>
                  <h2>{Title}</h2>
                  <img src={Poster} alt={imdbID} />

                </div>

              </div>


            </NavLink>

            </div>
           
            
           
           
          )
        })}</div>
      </section>

     

  )
}

export default Movies