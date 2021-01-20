const express = require("express");
const app = express();
const db = require("./db"); // requiring our db module that holds all the db queries we wantto run

app.get("/actors", (req, res) => {
    db.getActors()
        .then((results) => {
            console.log("results from getActors: ", results.rows);
        })
        .catch((err) => {
            console.log("error in getActors: ", err);
        });
});

// adding info to our db
app.post("/add-actor", (req, res) => {
    console.log("hit POST add-actor route");

    // we have to still create this db query
    db.addActor("Janelle Monae", 35)
        .then(() => {
            console.log("Success it worked");
        })
        .catch((err) => {
            console.log("err in addActor", err);
        });
});

app.listen(8080, () => console.log("Petition server is listening..."));
