/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Nonprofit = require('./nonprofit.model');

exports.register = function(socket) {
  Nonprofit.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Nonprofit.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('nonprofit:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('nonprofit:remove', doc);
}