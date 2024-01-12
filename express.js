const express = require('./express.js');
const app = express();
const port = 5500;

const dataTanaman = [
      {
        "id": 1,
        "name": "Tanaman A",
        "description": "Ini adalah tanaman A yang indah.",
        "price": 20.0
      },
      {
        "id": 2,
        "name": "Tanaman B",
        "description": "Tanaman B dengan daun hijau.",
        "price": 15.0
      }
];

app.get('/tanaman', (req, res) => {
 res.json(dataTanaman);
});

app.get('/tanaman', (req, res) => {
   res.status(404).send('Tanaman tidak ditemukan');
 });

app.get('/tanaman/:id', (req, res) => {
 const tanaman = dataTanaman.find(item => item.id === parseInt(req.params.id));
 if (!tanaman) return res.status(404).send('Tanaman tidak ditemukan');
 res.json(tanaman);
});

app.listen(port, () => {
 console.log(`API tanaman berjalan pada port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});