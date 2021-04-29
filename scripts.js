'use strict';

const express = require('express');
const {generateRandomNumber} = require('./randomNumber');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! ' + generateRandomNumber());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
