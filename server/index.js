const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const PORT = 3001;

app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'PWmanager'
})

app.post('/addpassword', (req, res) => {
    const { title, username, password } = req.body

    db.query("INSERT INTO passwords (title, username, password) VALUES (?,?,?)", [
        title,
        username,
        password
    ], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Success")
        }
    })
})
app.listen(PORT, () => {
    console.log('Server is running')
})