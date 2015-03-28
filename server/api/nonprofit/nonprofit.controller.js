'use strict';

var _ = require('lodash');
var Nonprofit = require('./nonprofit.model');

// Get list of nonprofits
exports.index = function(req, res) {
  Nonprofit.find(function (err, nonprofits) {
    if(err) { return handleError(res, err); }
    return res.json(200, nonprofits);
  });
};

// Get a single nonprofit
exports.show = function(req, res) {
  Nonprofit.findById(req.params.id, function (err, nonprofit) {
    if(err) { return handleError(res, err); }
    if(!nonprofit) { return res.send(404); }
    return res.json(nonprofit);
  });
};

// Creates a new nonprofit in the DB.
exports.create = function(req, res) {
  Nonprofit.create(req.body, function(err, nonprofit) {
    if(err) { return handleError(res, err); }
    return res.json(201, nonprofit);
  });
};

// Updates an existing nonprofit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Nonprofit.findById(req.params.id, function (err, nonprofit) {
    if (err) { return handleError(res, err); }
    if(!nonprofit) { return res.send(404); }
    var updated = _.merge(nonprofit, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, nonprofit);
    });
  });
};

// Deletes a nonprofit from the DB.
exports.destroy = function(req, res) {
  Nonprofit.findById(req.params.id, function (err, nonprofit) {
    if(err) { return handleError(res, err); }
    if(!nonprofit) { return res.send(404); }
    nonprofit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}