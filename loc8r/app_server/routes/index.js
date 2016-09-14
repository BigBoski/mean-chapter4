var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlcanyonlocation = require('../controllers/canyon');


/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/canyon', ctrlcanyonlocation.homelist);
router.get('/canyon/location', ctrlcanyonlocation.locationInfo);
router.get('/canyon/location/new', ctrlcanyonlocation.addReview);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
