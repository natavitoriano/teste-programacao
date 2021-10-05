const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testeDevelopment');
mongoose.Promise = global.Promise;

module.exports = mongoose;
