const mysql= require("mysql");
const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"test"
});
conn.connect((err)=>{//check connection
    if(err){
        console.warn("error in connection  ");
    }
    else{
        console .warn("connected");
    }
});

module.exports= conn;