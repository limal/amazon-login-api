const config = require('dotenv/config');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Amazon Login API is listening on port ${port}...`),
);