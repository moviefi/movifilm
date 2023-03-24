import React from 'react'

const MovieList = (props) => {
    const FavouriteComponent= props.favouritesComp
    return (
        <>
        
            {props.movies.map((movie, i) => (
                
            <div key={i} className='image d-flex justify-content-start m-3'>
                
            <a href={movie.trailer} target="blank"> <h3>{movie.name} {movie.yearReleased}</h3> <img alt="movie" src={movie.imageUrl} ></img> <h4>Directed by: {movie.director}</h4> </a>
            <div onClick={()=>props.handleFavourites(movie)} className='overlay d-flex align-items-center justify-content-center'>
                <FavouriteComponent/>
                
            </div>
            
            </div>))}
        </>
    )
}

export default MovieList