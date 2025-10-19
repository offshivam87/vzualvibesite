const express =require("express")
const mongoose = require("mongoose")
const formModel = require("./models/form.model")
const cors = require('cors')

const app = express()
app.use(cors())


app.use(express.json())

app.post('/form', async(req,res)=>{
  const {name,email,videoType,budgetRange,vision}= req.body
  console.log(name,email,videoType,budgetRange,vision);

  await formModel.create({
    name,email,videoType,budgetRange,vision
  })


  res.status(201).json({
      message: "Form submitted successfully!",
      
    })
})
module.exports = app