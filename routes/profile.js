const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('profile', { subject: 'Profile' });
});

module.exports = router;
