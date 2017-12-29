var mongoose = require('mongoose');
var Loc8r = mongoose.model('Location');

function sendJsonResponse(res, code, obj) {
    res.status(code);
    res.json(obj);
}

module.exports.reviewsCreate = function(req, res) {
    res.status(200);
    res.json({"status": "success"});
}

module.exports.reviewsReadOne = function(req, res) {
    if(req.params && req.params.locationid && req.params.reviewid) {
        Loc8r.findById(req.params.locationid)
                .select('name reviews')
                .exec(function(err, location) {
                    if(!location) {
                        
                    }
        })
    }
}

module.exports.reviewsUpdateOne = function(req, res) {
    res.status(200);
    res.json({"status": "success"});
}

module.exports.reviewsDeleteOne = function(req, res) {
    res.status(200);
    res.json({"status": "success"});
}