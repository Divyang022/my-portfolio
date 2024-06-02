const express=require("express")
const app=express()
require("dotenv").config()
require("./dbconnection/connection")
const router=require("./router/route")
const cors=require("cors")
const port=process.env.port

app.use(express.json())
app.use(cors())
app.use(router)
app.listen(port,()=>{
    console.log(`server is running on port:${port}`)
})
