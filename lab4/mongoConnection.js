// NOTE: for brew installed mongodb, use the command below to run mongodb locally
// mongod --dbpath /usr/local/var/mongodb
const MongoClient = require('mongodb').MongoClient;

const mongoConfig = {
  serverUrl: 'mongodb://localhost:27017/',
  database: 'Youhao_Wang_lab4'
};

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
  if (!_connection) {
    _connection = await MongoClient.connect(mongoConfig.serverUrl);
    _db = await _connection.db(mongoConfig.database);
  }

  return _db;
};
