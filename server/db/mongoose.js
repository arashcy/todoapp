var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log(process.env.MONGODB_URI);
var promise = mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true,
});

//Since the object name and its value is same, we export just by the name
module.exports = {mongoose};
