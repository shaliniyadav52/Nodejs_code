const express= require("express");
const EventEmitter= require("events");
//here EventEmitter ek class hai aur class name hmesa capital hi  likhte hai
const app= express();

const event= new EventEmitter();

let count=0;


event.on("countAPI", ()=>{
    count++;
    console.log("event called", count);
});//handle event 1para event name 2, callback function

app.get("/", (req, resp)=>{
    resp.send("api called");
    event.emit("countAPI");//event genrator
});
app.get("/search", (req, resp)=>{
    resp.send("search api called");
    event.emit("countAPI");
});
app.get("/update", (req, resp)=>{
    resp.send("update api called");
    event.emit("countAPI");

});
app.listen(5000);