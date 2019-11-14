const express = require('express')
var bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const Data = require('./Data/Data')
let DbEmail = require('./Data/DataEmail');
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
  const param = req.body;
  const email = param.email;
  resData = {
    "email": email
  }
  DbEmail = _.concat(DbEmail, resData);
  //kiểm tra trùng lặp
  const set = new Set();
  const newItems = _.filter(DbEmail, e => {
    if (set.has(e.email)) { 
      return false;
    } 
    else {
      set.add(e.email);
      return true;
    }
  });
  DbEmail = newItems;
  res.json(DbEmail);
});
app.listen(5000, () => {
  console.log('App listening on port 5000')
})