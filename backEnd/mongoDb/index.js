const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/moviehouse";
mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
const Movie= require('./Movie')

const getAllMovies = () => {
return Movie.find({})
};


const getOneMoviebyName= (name)=>{
  return Movie.find({name:name})

}
const addOneMovie = (data)=>{
  return Movie.create(data)

}
const deleteOneMovie = (name)=>{
  return Movie.deleteOne({name:name})

}

 const updateOneMovie =(name,data)=>{
  return Movie.findOneAndUpdate({name:name}, ({}))
 }

module.exports = {
  db,
  getAllMovies,
  getOneMoviebyName,
  addOneMovie,
  deleteOneMovie
};
