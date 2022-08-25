//import {x} from './app'

const { set } = require("mongoose")


// const app= require('./app');
// console.log(app);
// console.log(app.x);
// console.log(app.y);
// console.log(app.z());


// console.log("sub");
// var x= '20';
// const arr= [2,3,5,4,6,7,8,6];
// console.log(arr);
// console.log(arr[0]);


// const arr=[2,4,5,6,7,4,2];
// arr.filter((item)=>{
//     console.log(item);
// })
// //if we want to search specific value
// let result= arr.filter((item)=>{
//     return item>=4
// })
// console.warn(result);



///core model fs, buffer, http
//jo module we import called non globle
//and which module no need to import called globle


// const fs= require('fs');// non globle
// console.log("Code step by step");//globle
// fs.writeFileSync("hello.txt", "code step by step")//fs non globle bcoz it is not in enviroment we have to create.

// const gs=require('fs').writeFileSync;
// gs("a.text", "hello shalini");
//////////////

// console.log("->>>>", __dirname);
// console.log("->>>>", __filename);


// const http= require('http');
// //http   it handles reponse and request module in node js.

// http.createServer((req, resp)=>{
// resp.write("helloo i am shalini yadav");
// resp.end();
// }).listen(4500);

// // const http= require('http');
// // http.createServer().listen(4500);

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end(' Server created .............');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });




// const http = require('http');
// http.createServer((req, resp)=>{
//   resp.write("hello world");
//   resp.end();
// }).listen(4500);


////........Package json :- its keep the details of project , coding related, cmd, package, etc;

// const colors= require('colors');
// console.log("package.json".red);//external package


// ......Node js :  Multithreaded or single threaded 
// Answer == It is singale threaded(at a time only one cmd).

// const chalk = require('chalk');
// console.log(chalk.blue('Hello world!'));




//if our node module is delete then again run npm install

// ...............Nodemon package:- time saving module...............

// console.warn("try nodemon");
// console.log("heloo");


//.......................API....................//
// const http= require('http');
// const data= require('./data');
// http.createServer((req, resp)=>{
// resp.writeHead(200, {'Content-Type': 'application\json'});
// resp.write(
// JSON.stringify(data));
// resp.end();
// }).listen(5000);

//..........................Input from Command line........................
// console.log(process.argv)//by using this we can give input in cmd
// //add data in a file by cmd;// creating a file
// const fs= require('fs');
// const input= process.argv;
// fs.writeFileSync(input[2], input[3]);


//................................
//process is a object which keep all properties of nodejs

// const fs= require('fs');
// const input= process.argv;
// if(input[2]=='add'){ //for adding file
//     //node index.js add data1.txt 'hhhhhhh' = cmd

//     fs.writeFileSync(input[3], input[4])
// }
// else if(input[2]=='remove'){//for removeing created file
//     //node index.js remove data1.txt 'hhhhhh'
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("invalid output")
// }



//.................Show file List......................
//if we want  to create more file at a time
// const fs= require('fs');
// // fs.writeFileSync('apple.txt', 'this is a apple file');
// const path= require('path');
// const dirPath= path.join(__dirname, 'files');
//console.warn(dirPath);

// for(i=0; i<5; i++){
//     // 2 way of creating a dynamic file 
//     fs.writeFileSync( dirPath+ "/hello"+i+".txt", "A simple text file");
//    // fs.writeFileSync( `${i}st.txt`, 'A simple text file');
// }
// .............to read specific file........................................
// fs.readdir(dirPath, (err, files)=>{
//     //console.warn(files); will get file in array form
//     files.forEach((item)=>{//callback function
//         console.log("file name is ", item);

//     })
// });



///In node js we can not read file from the c drive or e drive 
//only can read the files of this folder beco this for 
// works like browser enviroment server .




//.....................................CURD WITH FILE SYSTEM....................................
//MAKE FILE In CURD folder
// const fs= require('fs');
// const path= require('path');
// const dirPath= path.join(__dirname,'CURD');
// const filepath= `${dirPath}/apple.txt`;
//fs.writeFileSync(filepath, 'This is a simple text file');
//READ FILE ...........................................
// fs.readFile(filepath,'utf8' ,(err, item)=>{
//     console.log(item);
// });
//UPDATE FILE.............................
// fs.appendFile(filepath, 'and file name is apple.txt',(err)=>{
//     if(!err) console.log("file is updated");
// });
//RENAME FILE..........................
// fs.rename(filepath, `${dirPath}/fruit.txt`, (err)=>{
// if(!err) console.log("file name is updated");
// });
//DELETE FILE
// fs.unlinkSync(`${dirPath}/fruit.txt`);

//BUFFER:..................- It is a temproery memory location


//......................................ASynchronous and Synchronous...............................
//Synchronous:- it performs one  tasks at a time (one by one )
// console.log("start exe.........");
// console.log("logic exe.........");
// console.log("complete exe.........");

// //Asynchronous:- Second Task do not wait to finish first task(parallel)
// console.log("start exe.........");
// setTimeout(() => {
//     console.log("logic exe.........");
// }, 2000);
// console.log("complete exe.........");
// //DrawBACK............Asynchronous............
// let a=10;
// let b=0;
// setTimeout(() => {
//     b=20;
// }, 2000);
// console.log(a+b);

//*******************************Handle Asynchronous Data in Node js *****************************/
//Promises:- it gives value 
// let a=10;
// let b=0;
// let waitingData= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         //b=20;
//       resolve(20);
//     }, 2000);
// });
// waitingData.then((data)=>{
//     b=data;
//     console.log(a+b);
// });
//console.log(a+b);


/************************************Call Stack *************************/

// console.log('starting up')//main-> call stack
// setTimeout(
//     ()=>{
//         console.log('Two seconds');
//     },2000
// );//-> node api-> call back Queue-> call stack
// setTimeout(()=>{
//     console.log('Zero seconds');
// },0);//-> node api-> call back Queue-> (when main function will execute then it will enter in call stack)callStack

// console.log('Finishing up');//->main-call stack



