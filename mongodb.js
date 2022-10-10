const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017'
const dbName = 'malwareProd'
const client = new MongoClient(url);


async function dbConnect(){
    await client.connect();
    console.log('Successfully connected to server.\n');
    db = client.db(dbName);
    return db.collection('malwareUrl');
}


module.exports = dbConnect;