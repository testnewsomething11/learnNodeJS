const dbConnect = require('./mongodb');

const insert = async ()=> {
    const db = await dbConnect();
    console.log('Data insertation initiated.');
    const result = db.insert({
        name: 'Test Malware',
        url: 'https://test.com'
    })
}

insert();
