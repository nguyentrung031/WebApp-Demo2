const express = require('express')
var bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const Data = require('./Data/Data')
const DbEmail = require('./Data/DataEmail')
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
app.get('/api/Tips', (req, res) => {
  res.json(Data);
});
app.get('/api/Supplies', (req, res) => {
  res.json(Data);
});
app.get('/api/StrangePoison', (req, res) => {
  res.json(Data);
});
app.get('/Detail/:id', (req, res) => {
  const data = _.find(Data,(val)=>{
    return val.id == req.params.id;
  });
  res.json(data);
})
app.get('/api/getEmail', (req, res) => {
  res.json(DbEmail);
});
app.post('/api/addEmail', (req,res) => {
  param = req.body;
  Email = param.email;
  resData = {
      "email":Email
  }
  DbEmail.Email = _.concat(DbEmail.Email, resData);
  //kiểm tra trùng lặp
  const set = new Set();
  const newItems = DbEmail.Email.filter(e => {
    if (set.has(e.email)) { 
      return false;
    } else {
      set.add(e.email);
      return true;
    }
  });
  DbEmail.Email = newItems;
  res.json(DbEmail);
});
app.listen(5000, () => {
  console.log('App listening on port 5000')
})