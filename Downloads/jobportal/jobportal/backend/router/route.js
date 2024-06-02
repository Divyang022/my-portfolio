const express=require("express")
const route=express.Router()
const usercontoller=require("../controller/userController")
const auth=require("../authentication/auth")
route.post("/register",usercontoller.register)
route.post("/login",usercontoller.login)
route.get("/profile",auth,usercontoller.profile)
module.exports=route