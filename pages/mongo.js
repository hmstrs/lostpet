const MongoClient = require('mongodb').MongoClient;

module.exports = async () => {
  if (!global.DB) {
    const dbName = process.env.DB_NAME;
    const url = process.env.DB_CONNECTION_STRING;
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    global.DB = await client.db(dbName);
  }
}
