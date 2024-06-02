const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
require("dotenv").config()
const secretkey=process.env.KEY
const schema=new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   password:{
    type:String,
    required:true
   },
   tokens:[
      {
         token:{
            type:String,
            required:true  
         }
      }
   ]
})



//password hashing
schema.pre("save",async function(next){
   if(this.isModified("password")){
      this.password=await bcrypt.hash(this.password,10)
   }
   next()
})

//token generate
schema.methods.generatetoken=async function(){
   try{
      let usertoken=jwt.sign({_id:this._id},secretkey)
      //to store token in token field 
      this.tokens=this.tokens.concat({token:usertoken})
      await this.save()
      //this means schema we wants to save
      return usertoken
   }
   catch(err){
      res.status(422).send(err)
   }
}
const usermodel=mongoose.model("user",schema)
module.exports=usermodel