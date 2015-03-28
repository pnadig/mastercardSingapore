/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Matercard = require('./matercard.model');

exports.register = function(socket) {
  Matercard.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Matercard.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('matercard:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('matercard:remove', doc);
}