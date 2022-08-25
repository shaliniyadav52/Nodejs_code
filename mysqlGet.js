const express= require('express');
const conn= require("./mysqlconfig");
const app=express();
app.use(express.json());

app.get("/",(req, resp)=>{
conn.query("select*from users", (err, result)=>{
    if(err){
        resp.send("error");

    }
    else{
        resp.send("connected ");
    }
});

    //resp.send("route done");
});

app.post("/", (req, resp)=>{
    const data= {fname:"yadav",name:"shalini",password:"3030", user_type:"visitor"};
    conn.query('INsert INTO users SET ?', data, (error, result, fields)=>{
        if(error){ error;
            resp.send(result);
        }
    })
});



////////////Staticaly  update dataa/////////////////

// app.put("/", (req, resp)=>{
//     const data=["anna", "2323", "Student","yadav"];
//     conn.query("UPDATE users SET name=?, password=?, user_type=? WHERE fname=?", data, (error, result, fields)=>{
//         if(error){ error;
//             resp.send(result);
//         }
//     });
 
// });

///////////////////////////////////Dynamically///////////////////
app.put("/:fname", (req, resp)=>{
    const data=[req.body.name,req.body.password, req.body.user_type, req.params.fname];
    conn.query("UPDATE users SET name=?, password=?, user_type=? WHERE fname=?", data, (error, result, fields)=>{
        if(error){ error;
            resp.send(result);
        }
    });
 
});

app.delete("/:fname", (req, resp)=>{
    conn.query("DELETE FROM users WHERE fname="+ req.params.fname,(err, result )=>{
        if(err) throw error;
        resp.send(result);
        
    })
  // resp.send(req.params.fname);
})






app.listen(5000);
