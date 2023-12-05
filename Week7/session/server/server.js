// npm init -y
// npm i mongoose express cors

// import express
const express=require("express")
//import cors
const cors=require('cors')
//declaration app
app=express()
// middleware
app.use(cors({credentials:true,origin:'http://localhost:3000'})
        ,express.json(),
        express.urlencoded({extended:true}))

//import of config mongoose
require('./config/mongoose.config')
//import routes
require('./routes/movie.routes')(app)
const port=7000
app.listen(port,()=>console.log('listening on port: ',port))
//RUN
// nodemon server.js

