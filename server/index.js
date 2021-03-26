const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "movie_reviewer1",
    password: "password123",
    database:  "crud_database"
});

app.get("/", (req, res) => {

});

app.listen(3001, () => {
    console.log("Running on port 3001");
});

