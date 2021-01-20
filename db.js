// db queries

const spicedPg = require('spiced-pg');

// 
const db = spicedPg("postgres:postgres:postgres@localhost:5432/petition");


module.exports.addPetition = (firstName, lastName, signature) => {
    return db.query(`
    INSERT INTO petition (first, last, signature) 
    VALUES ($1, $2, $3)`, [firstName, lastName, signature]);
};

module.exports.getTotal = () => {
    return db.query(`SELECT COUNT(*) FROM petition`);
};

module.exports.getName = () => {
    return db
        .query(`SELECT first,last FROM petition`)
        .then(({ rows }) => {
            console.log(rows);
        })
        .catch((err) => {
            console.log(err);
        });
};