const express = require('express');
const {generateRandomNumber} = require('./randomNumber')
const app = express();
// Heroku expects the application to listen on a specified port.
const port = process.env['PORT'] || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! ' + generateRandomNumber())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
