const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const Data = require('./Data/Data')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
  res.send('hello from server!')
})
app.get('/api/Tendency', (req, res) => {
  res.json(Data);
});
app.get('/api/Style', (req, res) => {
  res.json(Data);
});
app.get('/api/Space', (req, res) => {
  res.json(Data);
});
app.get('/api/PengShui', (req, res) => {
  res.json(Data);
});
app.listen(5000, () => {
  console.log('App listening on port 5000')
})