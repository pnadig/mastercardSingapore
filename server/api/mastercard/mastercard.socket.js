/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Mastercard = require('./mastercard.model');

exports.register = function(socket) {
  Mastercard.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Mastercard.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('mastercard:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('mastercard:remove', doc);
}