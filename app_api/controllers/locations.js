var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsListByDistance = function(req, res) {
    sendJSonResponse(res, 200, {"status": "success"});
};

module.exports.locationsCreate = function(req, res) {
    sendJSonResponse(res, 200, {"status": "success"});
};

module.exports.locationsReadOne = function(req, res) {
    if(req.params && req.params.locationid) {
       Loc.findById(req.params.locationid)
            .exec(function(err, location) {
                    if(!location) {
                        sendJSonResponse(res, 404, {"message": "location not found"});
                        return;
                    } else if(err) {
                        sendJSonResponse(res, 404, err);
                        return;
                    }

                    sendJSonResponse(res, 200, location);
        });
    } else {
        sendJSonResponse(res, 404, {"message": "no location id in request"});
    }
};

module.exports.locationsUpdateOne = function(req, res) {
    sendJSonResponse(res, 200, {"status": "success"});
};

module.exports.locationsDeleteOne = function(req, res) {
    sendJSonResponse(res, 200, {"status": "success"});
};