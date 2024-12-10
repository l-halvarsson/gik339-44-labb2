const express = require('express');
const server = express();

const sqlite3 = require('sqlite3').verbose();



server.get("/users", (req,res) => {

const db = new sqlite3.Database('./gik339-labb2.db');

db.all('SELECT * FROM USERS', (err, rows) => {
    if (err) {
        // Om det finns ett fel, skicka felstatus och meddelande
        res.status(500).send("Internal Server Error: " + err.message);
    } else {
        // Annars, skicka data
        res.status(200).send(rows);

        //Test
    }
});
});

server
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});

server.listen(3000, () =>
console.log('running server on http://localhost:3000')
);



