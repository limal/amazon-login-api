const config = require('dotenv/config');
const express = require('express');
var cors = require('cors')

const BUILD_VERSION = 2;
const buildVersion = `Build #${BUILD_VERSION}`;

const app = express();

app.use(cors())

app.get('/', (req, res) => {
    return res.send(`Amazon Login API - ${buildVersion}`);
});

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Amazon Login API ${buildVersion} is listening on port ${port}...`),
);