const express= require('express');
const multer= require('multer');
const app= express();


const upload= multer({
    storage:multer.diskStorage({
        destination:function(req, file, cb){
            cb(null, "uplodesFiles");
        },
        filename:function(req, file, cb){
            cb(null, file.fieldname+"-"+ Date.now()+".jpg");
        }
    })

}).single("user_file");
app.post("/upload",upload, (req, resp)=>{
    resp.send("file uploded");
});
app.listen(5000);

// createStream (yh ek function hai)se bhi hm file uplode ker skte hai 
// but multer easy hota hai

