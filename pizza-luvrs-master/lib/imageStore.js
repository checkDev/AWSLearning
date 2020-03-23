'use strict';

const fileStore = require('./imageStoreFile'),
s3store = require('./seStore');

function saveImage (name, base64String, callback) {
  let imageData = base64String.split('data:image/png;base64,')[1];
  s3store.save(name, imageData, callback);
}

module.exports.saveImage = saveImage;
