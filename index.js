const express = require('express');
const {generateRandomNumber} = require('./randomNumber')
const app = express();
const port = process.env['PORT'] || 3000;

app.get('/', (req, res) => {
  res.send('Deployed via pipeline')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
