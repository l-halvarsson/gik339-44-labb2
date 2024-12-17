// Importera Express.js för att skapa en webserver
const express = require('express');
// Skapa en ny Express-app
const server = express();
// Importera npm-paketet sqlite3
const sqlite3 = require('sqlite3').verbose();

// Sätter övergripande inställningar för servern
server
.use(express.json())
.use(express.urlencoded({ extended: false }))
.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});

// Starta servern på port 3000 och logga att den körs
server.listen(3000, () =>
console.log('running server on http://localhost:3000')
);

// Route för att hämta alla användare från databasen
server.get("/users", (req,res) => {  
    // Anslut till SQLite-databasen
    const db = new sqlite3.Database('./gik339-labb2.db');

    // Hämta alla rader från tabellen USERS
    db.all('SELECT * FROM USERS', (err, rows) => {
        if (err) {
            // Om det finns ett fel, skicka felstatus och meddelande
            res.status(500).send("Internal Server Error: " + err.message);
        } else {
            // Annars, skicka data
            res.status(200).send(rows);
        }
    });
});



