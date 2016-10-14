var homelist = function(req, res) {
    res.render('locations-list', {
        title: 'Loc8r - Finde a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you'
        },
        locations:[{
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
        }, {
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

var locationInfo = function(req, res) {
    res.render('location-info', {title: 'Location Info'});
};

var addReview = function(req, res) {
    res.render('location-review-form', {title: 'Add Review'});
};

module.exports = {
    homelist: homelist,
    locationInfo: locationInfo,
    addReview: addReview
};