const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign-up', { subject: 'sign-in' });
});

module.exports = router;
