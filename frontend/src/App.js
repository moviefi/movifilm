import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect, useState } from 'react'
import MovieList from './components/MovieList'
import "./App.css"
import MovieListHeading from './components/MovieListHeading'
import SearchBox from './components/SearchBox'
import AddFavourites from './components/AddFavourites'
import RemoveFavourites from './components/RemoveFavourites'
import Title from './components/Title'

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [favourites, setFavourites] = useState([])


  useEffect(() => {
    axios.get("http://localhost:5000/api/movies").then(({ data }) => {
      setMovies(data)
    }).catch(err => { console.log(err); })
  }, [])

  useEffect(() => {
    if (searchTerm!=="") {
      axios.get(`http://localhost:5000/api/movies/${searchTerm}`).then(({ data }) => {
        setMovies(data)

      }).catch(err => { console.log(err); })
    }
  }, [searchTerm])

  useEffect(() => {
    const movieFave = JSON.parse(localStorage.getItem("movie-add-favourites"))
    setFavourites(movieFave)
  }, [])

  const saveToLocalStorage = (items) => {
    console.log(items)
    localStorage.setItem('movie-add-favourites', JSON.stringify(items))

  }

  const logo= ()=>{
    return (
      <img src="https://flyclipart.com/thumb2/movie-camera-clip-art-clipart-images-68664.png"> </img>
    ) 
   }



  const addFavourite = (movie) => {
    const newFavouriteList = [...favourites, movie]
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  }

  const removeFavourite = (movie) => {
    const newFavouriteList = favourites.filter((favourite) => favourite.name !== movie.name)
    setFavourites(newFavouriteList)
    saveToLocalStorage(newFavouriteList)
  }

  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <Title heading={"Movie House"} />
        <SearchBox setSearchTerm={setSearchTerm} />
      </div>
      <div className='row'>
        <MovieList movies={movies} handleFavourites={addFavourite} favouritesComp={AddFavourites} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading={"Favourites"} />
      </div>
      <div className='row'>
        <MovieList movies={favourites} handleFavourites={removeFavourite} favouritesComp={RemoveFavourites} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading={"Action Movies"} />
      </div>
      <div className='row'>
        <MovieList movies={movies.filter((movie) => { return (movie.category === "Action") })} handleFavourites={addFavourite} favouritesComp={AddFavourites} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading={"Horror Movies"} />
      </div>
      <div className='row'>
        <MovieList movies={movies.filter((movie) => { return (movie.category === "Horror") })} handleFavourites={addFavourite} favouritesComp={AddFavourites} />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading={"Comedy Movies"} />
      </div>
      <div className='row'>
        <MovieList movies={movies.filter((movie) => { return (movie.category === "Comedy") })} handleFavourites={addFavourite} favouritesComp={AddFavourites} />
      </div>

    </div>
  )
}

export default App