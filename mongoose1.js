const express = require('express');
require('./config');
const Product = require('./product');
const app = express();
app.use(express.json());
app.post("/create", async (req, resp) => {
    let data = new Product(req.body);
    const result = await data.save();
    resp.send(result);
    // console.log(req.body);
    // resp.send("Done")


});
app.listen(5000);



app.get("/list", async (req, resp) => {
    let data = await Product.find();
    resp.send(data);
})

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send("done");
})


app.put("/update/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await Product.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})

