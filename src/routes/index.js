const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  console.log('jgjg')
  res.json({"message": "Home Page"});
});

module.exports = router;
