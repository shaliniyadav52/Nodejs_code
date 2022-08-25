//Express:- 
//*******************************Creating Page *********************************** */
// const express= require('express');
// const app= express();
// app.get('', (req , resp)=>{
//    //use of request
//     console.log("data sent by browser", req.query.name);
//     resp.send('hello '+req.query.name);
//      resp.send('hello shalini, this is home page');
// });
// app.get('/about', (req , resp)=>{
//     resp.send('hello shalini, this is about page');
// });
// app.get('/help', (req , resp)=>{
//     resp.send('hello shalini, this is help page');
// });
// app.listen(5000);


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&,.....Render HTML and Json ..................................
//Render = display
// const express= require('express');
// const app= express();
// app.get('', (req , resp)=>{
//    //use of request
//     // console.log("data sent by browser", req.query.name);
//     // resp.send('hello '+req.query.name);
//      resp.send(`<h1>hello shalini, this is home page</h1>
//      <a href="/about">Go to about page</a>
//      `);
// });
// app.get('/about', (req , resp)=>{
//     resp.send(`
//     <input type="text" placeholder="username" value="${req.query.name}"/>
//     <button> Click me</button>
//     <a href="/">Go to home  page</a>
//     `);
// });
// //Render Json data 
// app.get('/help', (req , resp)=>{
//     resp.send([{
//         name:'shalini ', 
//         email:'shalini@gmail.com'
//     }
// ,
// {
//     name:'shalini ', 
//     email:'shalini@gmail.com'
// }
// ]);
// });
// app.listen(5000);



//***************************************************************Make HTML PAGES ******************************** */
// const express = require('express');
// const path = require('path');

// const app = express();
// const publicPath = path.join(__dirname, 'views');
// console.log(publicPath);
//console.log(__dirname); use for print path

//app.use(express.static(publicPath));
//static :- use for downlode static pages 
//path  we can not access load directly from floder
// app.listen(5000);

///*******************************Remove extension of HTML**************** */
// app.get('', (__, resp) => {
//     resp.sendFile(`${publicPath}/home.html`);
// });
// app.get('/about', (__, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// });

// app.get('/help', (__, resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// });
// app.get('*', (__, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`);
// });


//***************************************************************************EJS Emmbeded jaavscript Template *****************************/
//app.set ('views', path.join (__dirname, 'views'));
//  app.set ('view engine', 'ejs');
// //app.set('view engine ','ejs');
// //first paarmeter  is fixed view engine , 2nd  which package we are using like ejs
// app.get('/profile', (_, resp)=>{
//     const user= {
//         name : 'shalini',
//         email:'shalini@gmail.com',
//         city:'azamgarh',
//         skills:['php','js', 'c++']
//     };
//     resp.render('profile',{user});
// });
// app.get('/login', (_,resp)=>{
//    resp.render('login');
// });
// app.listen(5000);






//****************************************MIDDLEWARE****************************** */
