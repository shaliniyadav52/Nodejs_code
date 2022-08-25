// Types of middleware 
// *Application -level 
// *Route- level
// *Error handling
// *Built in 
// *Third Party Middleware








// const express= require('express');
// const reqFilter= require('./middleware1');
// const app= express();
// const route= express.Router();
// const reqFilter=(req, resp,  next)=>{
//    // console.log('reqFilter');
//    if(!req.query.age){
//     resp.send("please provide age");
//    }
//    else if(req.query.age<18){
//     resp.send("You can not access this page");
//    }
//    else{
//    next();
//    }
// }
// app.use(reqFilter);
// app.get('/' , (req, resp)=>{
//     resp.send('Welcome to home page');
// });
// //single routed middleware
// app.get('/user' , (req, resp)=>{
//     resp.send('Welcome to user page');
// });
// app.get('/about' , (req, resp)=>{
//     resp.send('Welcome to user page');
// });
// app.listen(5000);


//***********************************Route Level Middleware***************************** */
//app.use(reqFilter);
const express= require('express');
const reqFilter= require('./middleware1');
const app= express();
const route= express.Router();

route.use(reqFilter);
app.get('/' , (req, resp)=>{
    resp.send('Welcome to home page');
});
//single routed middleware
app.get('/user' , (req, resp)=>{
    resp.send('Welcome to user page');
});

route.get('/about' , (req, resp)=>{
    resp.send('Welcome to user page');
});
route.get('/contact' , (req, resp)=>{
    resp.send('Welcome to contact page');
});
app.use('/', route);
app.listen(5000);
