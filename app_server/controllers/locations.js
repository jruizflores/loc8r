var homelist = function(req, res) {
	res.render('locations-list', {title: 'Home'});
};

var locationInfo = function(req, res) {
	res.render('location-info', {title: 'Location Info'});
};

var addReview = function(req, res) {
	res.render('index', {title: 'Add Review'});
};

module.exports = {
		homelist: homelist,
		locationInfo: locationInfo,
		addReview: addReview
};