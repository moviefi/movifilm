const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const movieSchema = new mongoose.Schema({
  name: String,
  imageUrl : String,
  yearReleased: String,
  language: String,
  director: String,
  category: String,
  trailer : String

  });
  
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;