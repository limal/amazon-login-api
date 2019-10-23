const config = require('dotenv/config');
const express = require('express');
var cors = require('cors')

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    return res.send('Amazon Login API - Build 1');
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Amazon Login API is listening on port ${port}...`),
);