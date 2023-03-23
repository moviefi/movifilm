const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
//uncomment to use mongodb
const db = require('./mongoDb')
// uncomment to use MYSQL 
// const db = require("./Mysql")
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/api/movies',(req,res)=> {
    db.getAllMovies().then(results=>{res.status(200).json(results)}).catch(err=>{res.status(500).json(err)})   
})
app.get('/api/movies/:name',(req,res)=> {
    db.getOneMoviebyName(req.params.name).then(results=>{res.status(200).json(results)}).catch(err=>{res.status(500).json(err)})   
})
app.post('/api/movies',(req,res)=> {
    db.addOneMovie(req.body).then(results=>{res.status(200).json("sucessfully added")}).catch(err=>{res.status(500).json(err)})   
})
app.delete('/api/movies/:name',(req,res)=> {
    db.deleteOneMovie(req.params.name).then(results=>{res.status(200).json("successfully deleted")}).catch(err=>{res.status(500).json(err)})   
})






app.listen(port, ()=>{
console.log(`listening on ${port}`);
})