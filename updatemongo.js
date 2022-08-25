const dbConnect = require('./mongodb1');
const updateData= async()=>{
    let data = await dbConnect();

    //for update one data use updateOne and for all use  update only
    let result= await data.updateOne({
        brand:'apple'},
        {$set:{brand:'phone', price:30000000}}
        );
        console.warn(result);
}
updateData();
