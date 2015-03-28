'use strict';

var _ = require('lodash');
var Mastercard = require('./mastercard.model');

// Get list of mastercards
exports.index = function(req, res) {
  Mastercard.find(function (err, mastercards) {
    if(err) { return handleError(res, err); }
    return res.json(200, mastercards);
  });
};

// router.get('/mastercard/restaurants', controller.mcrestaurants);

exports.mcrestaurants = function(req, res) {
  Mastercard.find(function (err, mastercards) {
    if(err) { return handleError(res, err); }
    return res.json(200, mastercards);
  });
};

// Get a single mastercard
exports.show = function(req, res) {
  Mastercard.findById(req.params.id, function (err, mastercard) {
    if(err) { return handleError(res, err); }
    if(!mastercard) { return res.send(404); }
    return res.json(mastercard);
  });
};

// Creates a new mastercard in the DB.
exports.create = function(req, res) {
  Mastercard.create(req.body, function(err, mastercard) {
    if(err) { return handleError(res, err); }
    return res.json(201, mastercard);
  });
};

// Updates an existing mastercard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mastercard.findById(req.params.id, function (err, mastercard) {
    if (err) { return handleError(res, err); }
    if(!mastercard) { return res.send(404); }
    var updated = _.merge(mastercard, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mastercard);
    });
  });
};

// Deletes a mastercard from the DB.
exports.destroy = function(req, res) {
  Mastercard.findById(req.params.id, function (err, mastercard) {
    if(err) { return handleError(res, err); }
    if(!mastercard) { return res.send(404); }
    mastercard.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
