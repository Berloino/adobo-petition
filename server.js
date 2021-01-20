const express = require("express");
const app = express();
const db = require("./db"); // requiring our db module that holds all the db queries we want to run

// getting information from our db
app.get("/actors", (req, res) => {
    db.getActors()
        .then((results) => {
            console.log("results from getActors:", results.rows);
        })
        .catch((err) => {
            console.log("error in getActors:", err);
        });
});

// adding information to our db
app.post("/add-actor", (req, res) => {
    console.log("hit POST add-actor route");

    // we have yet to create this db query
    db.addActor("Janelle Monáe", 35)
        .then(() => {
            console.log("yay it worked");
        })
        .catch((err) => {
            console.log("err in addActor", err);
        });
});

app.listen(8080, () => console.log("petition server is listening..."));
