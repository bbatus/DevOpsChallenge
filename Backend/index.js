const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./Database/config'); // Veritabanı bağlantısını ekleyin

app.get('/', (req, res) => {
  res.send('Hello DevOps Challenge!');
});

// Örnek bir veri ekleme işlemi
app.get('/add', (req, res) => {
  db.run('INSERT INTO messages (message) VALUES (?)', ['Hello from Backend!'], function(err) {
    if (err) {
      return res.status(500).send('Error inserting message: ' + err.message);
    }
    res.send('Message inserted with ID: ' + this.lastID);
  });
});

// Örnek bir veri okuma işlemi
app.get('/messages', (req, res) => {
  db.all('SELECT * FROM messages', [], (err, rows) => {
    if (err) {
      return res.status(500).send('Error fetching messages: ' + err.message);
    }
    res.json(rows);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
