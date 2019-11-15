const express = require('express')
var bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const Data = require('./Data/Data')
var DbEmail = require('./Data/DataEmail.js');
app.get('/', (req, res) => {
  res.send('hello from server!')
})
app.get('/api/tendency', (req, res) => {
  res.json(Data);
});
app.get('/api/style', (req, res) => {
  res.json(Data);
});
app.get('/api/space', (req, res) => {
  res.json(Data);
});
app.get('/api/peng_shui', (req, res) => {
  res.json(Data);
});
app.get('/api/tips', (req, res) => {
  res.json(Data);
});
app.get('/api/supplies', (req, res) => {
  res.json(Data);
});
app.get('/api/strange_poison', (req, res) => {
  res.json(Data);
});
app.get('/api/get_detail/:id', (req, res) => {
  const data = _.find(Data, (val) => val.id == req.params.id);
  res.json(data);
}) 
app.get('/api/get_email', (req, res) => {
  res.json(DbEmail);
});
app.post('/api/add_email', (req,res) => {
  DbEmail = _.uniq(_.concat(DbEmail, req.body.email));
  res.json(DbEmail);
});
app.listen(5000, () => {
  console.log('App listening on port 5000')
})