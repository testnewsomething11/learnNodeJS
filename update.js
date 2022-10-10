const dbConnect = require('./mongodb');

const update = async ()=> {
    let db = await dbConnect();
    console.log('Updation started.')
    let result = db.updateOne({
        name: 'Test Malware'
    },
    {
        $set:{
            name:'Test2 Malware',
            url:'https://umvs.com'
        }
    }
    )
}

update();