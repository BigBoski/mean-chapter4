
/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('canyon-list', {
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Bo Knows Pizza pays us to say Bo knows is the best pizza around!",
        locations: [{
            name: 'Bo Knows Pizza',
            address: '110 23rd st',
            rating: 5,
            facilities: ['Hot drinks', 'Hot Food', 'Premium wifi','Get to know your pizza'],
            distance: '50m'
        }, {
            name: 'Big Daddy Pizzeria',
            address: '1010 4th st',
            rating: 3,
            facilities: ['Sweet Tea', 'Great Pizza', 'Great location'],
            distance: '200m'
        }, {
            name: 'Its a Pizza!',
            address: '101 5th ave',
            rating: 1,
            facilities: ['Premium Food', 'OK wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('canyon-info', {
        title: 'Bo Knows Pizza',
        pageHeader: {
            title: 'Bo Knows Pizza'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Bo Knows Pizza',
            address: '110 23rd st',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 34.9819,
                lng: 101.9159
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Bo Knows',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Clint Eastwood',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Reminded me of the old west.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: {
            title: 'Review Starcups'
        }
    });
};