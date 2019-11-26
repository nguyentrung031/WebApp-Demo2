const express = require('express');
const router = express.Router();
const _ = require('lodash');
var Data = require('../../Data/Data');

//@router GET api/tips
//@asc get all Data
router.get('/', (req, res) => {
  var sortData = _.sortBy(Data, [o => o.date]);
  res.json(sortData);
});
//@router GET api/tips/new_sort_desc
//@desc get all Data
router.get('/new_sort_desc', (req, res) => {
  var sortData = _.sortBy(Data, [o => o.date]).reverse();
  res.json(sortData);
});
//@router GET api/tips/popalar_sort
router.get('/popalar_sort', (req, res) => {
  var sortData = _.sortBy(Data, [o => o.view]).reverse();
  res.json(sortData);
});
module.exports = router