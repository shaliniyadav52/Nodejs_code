const mysql= require("mysql");
const conn= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"ecomm"
});
conn.connect((err)=>{//check connection
    if(err){
        console.warn("error");
    }
    else{
        console .warn("connected");
    }
});

//show the database 
conn.query("select *from users ",(err, result)=>{
      console.warn("result", result);
});

// Importing module
// var mysql = require('mysql')

// var connection = mysql.createConnection({
// 	host:"localhost",
// 	user:"root",
// 	password:"",
// 	database : "ecomm"
// })

// // Connecting to database
// connection.connect(function(err) {
// 	if(err){
// 	console.log("Error in the connection")
// 	console.log(err)
// 	}
// 	else{
// 	console.log(`Database Connected`)
// 	connection.query(`SHOW DATABASES`,
// 	function (err, result) {
// 		if(err)
// 		console.log(`Error executing the query - ${err}`)
// 		else
// 		console.log("Result: ",result)
// 	})
// 	}
// })




