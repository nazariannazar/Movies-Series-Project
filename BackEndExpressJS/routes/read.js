const mysql = require("mysql");
const express = require("express");
let db = require("./database");
const app = express.Router();

// POSTMAN - Filter sur MOVIES
// http://localhost:3050/read/allmovies

app.get("/allmovies", function (req, res) {
  let requete = `SELECT *
                FROM listofprogram 
                INNER JOIN IMAGE ON listofprogram.id_image = image.id_image
                INNER JOIN CATEGORY ON listofprogram.id_category = category.id_category
                WHERE category.name_category = "movies" AND listofprogram.releasedYear >= '2010'
                LIMIT 21`;
  db.query(requete, (err, rows, fields) => {
    if (err) {
      // res.send(err.message); old version
      res.status(400).send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

// POSTMAN - Filter sur SERIES
// http://localhost:3050/read/allseries

app.get("/allseries", function (req, res) {
  let requete = `SELECT *
                FROM listofprogram 
                INNER JOIN IMAGE ON listofprogram.id_image = image.id_image
                INNER JOIN CATEGORY ON listofprogram.id_category = category.id_category
                WHERE category.name_category = "series" AND listofprogram.releasedYear >= '2010'
                LIMIT 21`;
  db.query(requete, (err, rows, fields) => {
    if (err) {
      // res.send(err.message); old version
      res.status(400).send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      console.log(rows);
    }
  });
});

// POSTMAN - Afficer toutes les CATEGORIES
// http://localhost:3050/read/allcategories

app.get("/allcategories", function (req, res) {
  let requete = `SELECT * FROM category`;
  db.query(requete, (err, rows, fields) => {
    if (err) {
      // res.send(err.message); old version
      res.status(400).send(err.message);
      console.log(err.message);
    } else {
      res.send(rows);
      // console.log(rows);
    }
  });
});

module.exports = app;
