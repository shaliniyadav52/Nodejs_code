

const dbConnect= require('./mongodb1');


// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'; const databaseName = 'e-comm'
// const client = new MongoClient(url); 
// async function getData() { 
//     let result = await client.connect();
//      db = result.db(databaseName); 
//      collection = db.collection('product');
//      //read data from mongodb
//       let data = await collection.find({brand:"apple"}).toArray(); 
//       console.log(data) }
// getData();

// const { MongoClient } = require('mongodb')
// const url = 'mongodb://localhost:27017'; const databaseName = 'e-comm'
// const client = new MongoClient(url); 

// async function dbConnect() { 
//     let result = await client.connect();
//      db = result.db(databaseName); 
//      return  db.collection('product');
//      //read data from mongodb
//     //   let data = await collection.find({brand:"apple"}).toArray(); 
//     //   console.log(data) }
// }
//console.log(dbConnect());//Promise { <pending> } now we have to handle promise


//******78*******************When we  have to handle  promise
 
//111111111111111 way  Reading data from mongodb

dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
    console.log(data)
    })
    })
//when we use toArray  then it return promise ;
//Promise:- When we do havey operation then 

//222222.....

// const main=async()=>{//it will also handle promise and fill all data
//     // console.log("main function called");
//     let data= await dbConnect();
//     data= await data.find().toArray();
//     console.warn(data);
// }
// main();