// const express= require('express');
// const app = express();
// const mongoose= require('mongoose');

// mongoose.connect("mongodb://localhost:27017/e-comm1", (err)=>{
//     if(!err) console.log('db connected');
//     else console.log('db error');
// });
// const ProductSchema= new mongoose.Schema({
//     name:String
// })
// const ProductModel= new mongoose.model('product', ProductSchema);
// const data= new ProductModel({
//     name:'m8'
// });
// data.save();
// app.listen(6000, ()=> {console.log('connection listen on 6000')});

const mongoose = require('mongoose');//connect with mongoose

const saveInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name: String,//make schema
        price: Number,
        brand: String,
        Category: String
    });
    const ProductModel = mongoose.model('product', ProductSchema);
    let data = new ProductModel({//making model
        name: "note-pro",
        price: 250,
        brand: 'maxx',
        Category: 'mobile'
    });
    let result = await data.save();
    console.log(result);
}
//saveInDB();

const updateInDB = async () => {
    // await mongoose.connect("mongodb://localhost:27017/e-comm");
    // const ProductSchema = new mongoose.Schema({
    //     name: String,//make schema
    //     price: Number,
    //     brand: String,
    //     Category: String
    // });
    const ProductModel = mongoose.model('products', ProductSchema);
    let data = await ProductModel.updateOne(
        { name: 'max m8' },
        {
            $set: {
                 price: 7500, name:'max-pro 8'
            }
        });
    console.log(data);

}
//updateInDB();

///**************************88***********DELETE operation */

const deleteDB= async()=>{
      await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductSchema = new mongoose.Schema({
        name: String,//make schema
        price: Number,
        brand: String,
        Category: String
    });
    const ProductModel= mongoose.model('products', ProductSchema);
    let data = await ProductModel.deleteOne(
        { name:'m8' });
        console.log(data);
        if(data.acknowledge){
            console.log("record deleted");
        }
}
//deleteDB();

const findInDB= async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
  const ProductSchema = new mongoose.Schema({
      name: String,//make schema
      price: Number,
      brand: String,
      Category: String
  });
  const ProductModel= mongoose.model('products', ProductSchema);
  let data = await ProductModel.find({name:'m8'});
      console.log(data);
}

findInDB();


