var dburl = 'localhost:27017/EzyClaims';
var collections = ['claims'];
var db = require('mongojs').connect(dburl, collections);

module.exports = db;