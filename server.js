// Back-end (Node.js using Express.js and MySQL)
const express = require('express');
const mysql = require('mysql');
// Import the cors middleware
const cors = require('cors');
const app = express();
//An Express.js middleware setup that enables CORS for the Express application
app.use(cors('*'));

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'test',
  password: 'pass',
  database: 'group_project'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

app.get('/book', (req, res) => {
  db.query('SELECT * FROM book', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/user', (req, res) => {
  db.query('SELECT * FROM user', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.get('/borrowed', (req, res) => {
  db.query('SELECT * FROM borrowed', (error, results) => {
    if (error) throw error;
    res.json(results);
    
  });
});

const port = 3000

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

/* ########### ALAN TESTING STUFF BELOW ########## */

app.get('/', (req, res) => {
  if (error) throw error
  console.log('sent index.html')
  res.send('index.html')
})

app.get('/test', (req, res) => {

  let query = `SELECT book_id, title FROM book ORDER BY book_id`

  db.query(query, (error, results) => {
    if (error) throw error
    res.json(results)
  })
})

app.get('/test2', (req, res) => {

  let query = `SELECT * FROM user`

  db.query(query, (error, results) => {
    if (error) throw error
    res.json(results)
  })
})