const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const db = require('./db');
const names = db.getName();
const signersCount = db.getTotal();

app.use(cookieParser());
app.use(express.static("./public"));

app.use(
    express.urlencoded({
        extended: false,
    })
);

// getting info from db
app.get('/petition', (req, res) => {
    
    if (req.cookies.signed) {
        res.redirect('/thanks');
    } else {
        res.render('petition');
    }

});

app.get('/thanks', (req, res) => {
    const signersPage = res.redirect('/signers');

    if (req.cookie.signed) {
        res.render('thanks', {
            signersPage,
            signersCount
        });
    } else {
        res.redirect('/petition');
    }
});

app.get('/signers', (req, res) => {
    

    if (req.cookie.signed) {
        res.redirect('/petition');
    } else {
        res.render('signers', {
            names
        });
    }
});

// adding info to db
app.post('/petition', (req, res) => {
    console.log('hit Post petition route', req.body);
    //we have to create this db query
    db.addPetition('Janelle', 'Smith').then(() => {
        console.log('petition added');
        res.cookie('signed', 1);
        res.redirect('/thanks');
    })
        .catch((err) => {
            console.log('err in addPetition', err);
            res.render('petition');
        });
});

// #1
// set up get-routes and templates (with placeholders)

// db-communication should be working

// hb-express portfolio, middleware projects

app.listen(8080, () => console.log("Petition server listening..."));
