var express = require('express');
var router = express.Router();
var locationsctrl = require('../controllers/locations')
var aboutctrl = require("../controllers/about")

/* location pages routed to controller */

router.get('/',locationsctrl.home)
router.get('/location', locationsctrl.details);
router.get('/review', locationsctrl.review)

/* about pages routed to controller */

router.get('/about', aboutctrl.about)
module.exports = router;
