//when we make api the biggest role in that of express

const express = require('express');
const dbConnect = require('./mongodb1');
const app= express();
const mongodb= require('mongodb');

//get data or request  from  postman to nodejs use middleware
app.use(express.json());
//body parser : we do not use becoxz now we use
// express.josn . we used it before express 4.5version
//but now get the request from body we use express.josn

app.get('/', async(req, resp)=>{

    let data= await dbConnect();
    data=  await data.find().toArray();
    console.log(data);
    resp.send(data);
    
});





//**********************************POST API method */
//we can give same url to get and post method
app.post('/', async (req,resp)=>{
   console.log(req.body);
    let data= await dbConnect();
    let result= await data.insert(req.body);

    resp.send(result);
   
});




//**********************************************PUT METHOD************** */

//BY api
//by post method we also can update data
//but according too standerd we use PUT

//app.put("/", async(req, resp)=>{
    app.put("/:name", async(req, resp)=>{//use paarams
    console.log(req.body);
    let data= await dbConnect();
    //Dynamic data postman to mongodb
    let result= await  data.updateOne(
       //name or condition is static but now we can do it also dayanamic
        // {name:'peter'}, {$set:req.body}
        //{name:req.body.name}, {$set:req.body}//dyanamic 
        {name:req.params.name}, {$set:req.body}//whenever we pass that data which is not matching to actual data
        //then  we use params and  we pass actual data in postman 6000/ (actual data)
        //  and /:name in link
        );

    // let result= data.updateOne(//static data send to node js to mongodb
    //     {name:'peter'}, { $set: {name:'IIIphone', price:2400000}}
    //   );
   resp.send({result:'updated'});
 });






//***********************************************DELETE METHOD **********************************/
//const mongodb= require('mongodb');
app.delete("/",async(req, resp)=>{
    console.log(req.params.id);
    const data= await dbConnect();
    const result= await data.deleteOne({_id: new mongodb.ObjectId (req.params.id)});
        //for passing id we have to import mongodb object
   resp.send(result);
});



app.listen(6000);





