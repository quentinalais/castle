const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://mongo///127.0.0.1:27017/?gssapiServiceName=mongodb';

// Database Name
const dbName = 'web';

// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser =true}, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  db.close();
});

