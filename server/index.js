const express = require('express');
const app = express();
const cors=require('cors');
const multer = require('multer')
const mongoose = require('mongoose');
const BuyerModel=require('./models/BuyerModel')
const VendorModel=require('./models/VendorModel')
const ProductModel=require('./models/ProductModel');
const path = require('path');
app.use(express.json())
app.use(cors())
mongoose
  .connect("mongodb://127.0.0.1:27017/Country_Cart")
app.post('/register',(req,res)=>{
  BuyerModel.create(req.body).then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/content',(req,res)=>{
  ProductModel.find({})
  .then(result=> res.json(result))
  .catch(err => res.json(err))
})
app.post('/login',(req,res)=>{
  const {email,password}=req.body;
  BuyerModel.findOne({email:email}).then(
    user=>{
      if(user){
        if(user.password==password)
        {
          res.json("success")
        }
        else{
          res.json("The password is incorrect")
        }
      }else{
        res.json("No record exist")
      }
    }
  )
})
app.post('/fregister',(req,res)=>{
  VendorModel.create(req.body).then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post('/flogin',(req,res)=>{
  const {email,password}=req.body;
  VendorModel.findOne({email:email}).then(
    user=>{
      if(user){
        if(user.password==password)
        {
          res.json("success")
        }
        else{
          res.json("The password is incorrect")
        }
      }else{
        res.json("No record exist")
      }
    }
  )
})
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null , 'public/images')
  },
  filename: (req , file, cb)=>{
    cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
  }
})

const prodIm=multer({
  storage: storage
})
app.post('/farmers', prodIm.single('prodImage'),(req,res)=>{
  ProductModel.create(req.body).then(result=>res.json(result))
  .catch(err=>console.log(err))
})
app.listen(3000,()=>{
  console.log("Server is running");
})

