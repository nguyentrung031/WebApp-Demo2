const express = require('express');
const router = express.Router();
const _ = require('lodash');
const paginate = require('jw-paginate');
var Data = require('../../Data/Data');

//@router GET api/tendency
//@asc get all Data
router.get('/', (req, res) => {
  var sortData = _.sortBy(Data, [o => o.date]);
  res.json(sortData);
});
//@router GET api/tendency/new_sort_desc
//@desc get all Data
router.get('/new_sort_desc', (req, res) => {
  var sortData = _.sortBy(Data, [o => o.date]).reverse();
  res.json(sortData);
});
//@router GET api/tendency/popalar_sort
router.get('/popalar_sort', (req, res) => {
  var sortData = _.sortBy(Data, [o => o.view]).reverse();
  res.json(sortData);
});
//@router paged items route
router.get('/items', (req, res, next) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 5;
  const pager = paginate(Data.length, page, pageSize);
  const pageOfItems = Data.slice(pager.startIndex, pager.endIndex + 1);
  return res.json({ pager, pageOfItems });
});
module.exports = router