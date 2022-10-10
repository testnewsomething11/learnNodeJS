const dbConnect = require("./mongodb");

const deleteFile = async () =>{
    let data = await dbConnect();
    data = await data.remove({
        name: "fileMalware"
    });
    console.log(data);
}

deleteFile();
