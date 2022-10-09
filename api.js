const express = require('express');
const res = require('express/lib/response');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');

const app = express();
app.use(express.json());


app.get('/', async (req, resp) => {
    let data = await dbConnect()
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.get('/urls', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data)
})

app.post('/malwareUrl', async (req, resp) => {
    let data = await dbConnect();
    let output = await data.insertOne(req.body);
    resp.send(output);

})

app.put('/:name', async (req, resp) => {
    let data = await dbConnect();
    data = await data.updateOne(
        {name: req.params.name},
        {$set:req.body}
        );
    resp.send(data);
})


app.delete('/:id', async (req, resp) =>{
    let data = await dbConnect();
    data = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(data)
})

app.listen(4444);

