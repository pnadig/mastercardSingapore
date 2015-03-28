'use strict';

var _ = require('lodash');
var Matercard = require('./matercard.model');

// Get list of matercards
exports.index = function(req, res) {
  Matercard.find(function (err, matercards) {
    if(err) { return handleError(res, err); }
    return res.json(200, matercards);
  });
};

// Get a single matercard
exports.show = function(req, res) {
  Matercard.findById(req.params.id, function (err, matercard) {
    if(err) { return handleError(res, err); }
    if(!matercard) { return res.send(404); }
    return res.json(matercard);
  });
};

// Creates a new matercard in the DB.
exports.create = function(req, res) {
  Matercard.create(req.body, function(err, matercard) {
    if(err) { return handleError(res, err); }
    return res.json(201, matercard);
  });
};

// Updates an existing matercard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Matercard.findById(req.params.id, function (err, matercard) {
    if (err) { return handleError(res, err); }
    if(!matercard) { return res.send(404); }
    var updated = _.merge(matercard, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, matercard);
    });
  });
};

// Deletes a matercard from the DB.
exports.destroy = function(req, res) {
  Matercard.findById(req.params.id, function (err, matercard) {
    if(err) { return handleError(res, err); }
    if(!matercard) { return res.send(404); }
    matercard.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}