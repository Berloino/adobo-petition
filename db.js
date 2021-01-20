// this module holds all the queries we'll using to talk to our database

const spicedPg = require("spiced-pg");

const db = spicedPg("postgres:postgres:postgres@localhost:5432/actorsinfo");
// spicedPg('whoDoWeWantToTalkTo:whichUserShouldBeRunningOurQueries:whatPasswordDoesThisUserHave@WhereDoesThisCommuncationHappen:specifiedPortForCommunication/NameOfOurDatabase)

module.exports.getActors = () => {
    const q = `SELECT * FROM actors`;
    return db.query(q); //db.query takes potentially two arguments, the 1st being a query we want to run on our db, the 2nd we'll see in a minute ;)
};

module.exports.addActor = (actorName, actorAge) => {
    const q = `INSERT INTO actors (name, age)
    VALUES ($1,$2)`;
    const params = [actorName, actorAge];
    return db.query(q, params);
};
