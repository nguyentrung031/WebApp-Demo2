const express = require('express');
const router = express.Router();
const _ = require('lodash');
var DbEmail = require('../../Data/DataEmail')

//@router GET api/email
//@get all Data
router.get('/', (req, res) => {
  res.json(DbEmail);
});
//@router POST api/email
router.post('/', (req,res) => {
  DbEmail = _.uniq(_.concat(DbEmail, req.body.email));
  res.json(DbEmail);
});
module.exports = router
