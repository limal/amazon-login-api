require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require('request-promise');

const BUILD_VERSION = 2;
const buildVersion = `Build #${BUILD_VERSION}`;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  return res.send(`Amazon Login API - ${buildVersion}`);
});

app.post('/customers/auth', (req, res) => {
  requestAccessToken(req.body.code)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log('ERROR', error);
      res.status(400).send(error);
    });
});

const requestAccessToken = (code) => {
  return request.post(
    'https://api.amazon.com/auth/o2/token',
    {
      form: {
        grant_type: 'authorization_code',
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET
      }
    }
  );
}

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Amazon Login API ${buildVersion} is listening on port ${port}...`),
);