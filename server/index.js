const express = require('express');
require('dotenv').config()
const app = express();
const cors=require('cors');
const mongoose = require('mongoose');
const BuyerModel=require('./models/BuyerModel')
const VendorModel=require('./models/VendorModel')
const ProductModel=require('./models/ProductModel');
const otpGenerator=require('otp-generator')
app.use(express.json())
app.use(cors())
const nodemailer=require('nodemailer')

mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connected Successfully"))
  .catch(err=>console.log(err))
app.post('/register',(req,res)=>{
  BuyerModel.create(req.body).then(result => res.json(result))
  .catch(err => res.json(err))
})
app.get('/content',(req,res)=>{
  ProductModel.find({})
  .then(result=> res.json(result))
  .catch(err => res.json(err))
})
const otp=otpGenerator.generate(6,{upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false})
app.post('/login',(req,res)=>{
  const {email,password}=req.body;

  BuyerModel.findOne({email:email}).then(
    user=>{
      if(user){
        if(user.password==password)
        {
          var transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASS
            }
        });

        var mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'HI...',
            text: `The otp is ${otp}`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        res.json("success");
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
          const transport=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:465,
            secure:true,
            auth:{
              user:process.env.EMAIL,
              pass:process.env.APP_PASS
            }

          })
          const mailOptions={
            from:process.env.EMAIL,
            to:email,
            subject: `Your Otp for Country car is ${otp}`,
            text:`You're trying to login in Country Cart and your Otp is ${otp}`

          }
          transport.sendMail(mailOptions,(err,info)=>{
            if(err){
              console.log(err)
            }
            else
            console.log("Email sent:"+info);
          })
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
app.post("/cart",(req,res)=>{
    ProductModel.find({_id:req.body.id}).then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.post('/farmers', async(req,res)=>{
  const {Location,name,produtDesc,produtPrice,produtQuantity,productImage}=req.body;
  console.log(req.body)
  const existing = await ProductModel.findOne({name})

  if(existing){
    (existing.produtQuantity)+=Number(produtQuantity);
    const Update=existing.save();
    res.json(Update)
  }
  else{

    ProductModel.create(req.body)
  .then(result=>res.json(result))
.catch(err=>console.log(err))
}
})
app.post('/otpverification',(req,res)=>{
  if(req.body.otp==otp){
    res.json('success')
  }
  else
  res.json("Incorrect OTP")
})
app.listen(3000,()=>{
  console.log("Server is running");
})

