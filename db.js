// this module holds all the queries we'll be using to talk to our database

const spicedPg = require("spiced-pg");

const db = spicedPg("postgres:postgres:postgres@localhost:5432/petition");
// spicedPg("whoDoWeWantToTalkTo: whichUserShouldBeRunningOurQueries: whatPasswordDoesThisUserHave@whereDoesThisCommunicationHappen: specifiedPortForCommunication/nameOfOurDatabase")
// will have to create my own database and change the field accordingly

module.exports.getActors = () => {
    const q = `SELECT * FROM actors`;
    return db.query(q);
    // db.query takes potentially two arguments: the 1st being a query we want to run on our db and the 2 we'll see in amin
};

module.exports.addActor = (actorName, actorAge) => {
    const q = `INSERT INTO actors (name, age)
    VALUES ($1,$2)`;
    const params = [actorName, actorAge];
    return db.query(q, params);
};
