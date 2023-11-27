
const { express, mongoose, app } = require("./server");

// Middlewares

app.use('/',(req,res,next)=>{
  res.send("Hello World")
})