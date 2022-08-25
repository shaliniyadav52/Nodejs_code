const dbConnect= require('./mongodb1');
const deleteData= async()=>{
    let data= await dbConnect();
    //delete one data use deleteOne fuc and for many use deleteMany()
    let result= await data.deleteOne({
        brand:'abc'});
    console.log(data);
    if(result.acknowledge){
        console.log("record deleted");
    }
}
deleteData();
// if we are delete that data which is not in out databse then our deletecount will 0
