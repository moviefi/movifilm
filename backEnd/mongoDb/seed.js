const { db } = require("./index.js");
const Movie = require("./Movie.js");

const sampleData = require("../data.json");
 
const insertSampleProducts = function () {
  Movie.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleProducts();