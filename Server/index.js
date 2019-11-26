const express = require('express')
var bodyParser = require('body-parser');
const app = express();
const _ = require('lodash');
const tendency = require('./router/api/tendency');
const style = require('./router/api/style');
const space = require('./router/api/space');
const peng_shui = require('./router/api/peng_shui');
const tips = require('./router/api/tips');
const supplies = require('./router/api/supplies');
const strange_poison = require('./router/api/strange_poison');
const email = require('./router/api/email');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const Data = require('./Data/Data')
app.get('/', (req, res) => {
  res.send('hello from server!')
})
app.use('/api/tendency', tendency);
app.use('/api/style', style);
app.use('/api/space', space);
app.use('/api/peng_shui', peng_shui);
app.use('/api/tips', tips);
app.use('/api/supplies', supplies);
app.use('/api/strange_poison', strange_poison);
app.use('/api/email', email);
app.get('/api/get_search', (req, res) => {
  var q = req.query.q
  var result = _.filter(Data, (val) => 
    val.name.toLowerCase().indexOf(q.toLowerCase()) !== -1
  );
  res.json(result);
});
app.get('/api/get_detail/:id', (req, res) => {
  const data = _.find(Data, (val) => val.id == req.params.id);
  res.json(data);
});

app.listen(5000, () => {
  console.log('App listening on port 5000')
})