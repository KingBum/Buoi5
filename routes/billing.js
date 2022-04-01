const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('billing', { subject: 'Billing' });
});

module.exports = router;
