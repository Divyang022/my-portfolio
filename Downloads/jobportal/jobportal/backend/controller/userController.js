const User=require("../models/userSchema")
const bcrypt=require("bcryptjs")
exports.register=async(req,res)=>{
    const{name,email,password}=req.body
    if(!name || !email || !password)
    {
        res.status(400).send("Required Fields")
    }
    try{
        const getEmail=await User.findOne({email:email})
        if(getEmail)
        {
            return res.status(400).send("Email Already Exists")
        }
        const userregister=new User({name,email,password})
        const saveduser=await userregister.save();
        res.status(200).send(saveduser)
    }
    catch(error){
        res.status(400).send(`error from backend:${error}`)
    }
}

exports.login=async(req,res)=>{
    const{email,password}=req.body
    if(!email || !password)
    {
        res.status(400).send("Required Fields")
    }
    try{
        const user=await User.findOne({email:email})
        if(user)
        {
            const passwordcheck=await bcrypt.compare(password,user.password)
            if(passwordcheck)
            {
                const token=await user.generatetoken()
                console.log(token)
                res.status(200).send({user,token})
            } 
            else{
                res.status(400).send({err:"invalid password"})
            }         
        }
    }
    catch(err){
        res.status(400).send(`error from backend:${err}`)
    }
}

exports.profile =async(req,res)=>{
    try {
      const uservalidation = await User.findOne({_id:req.userid})
      res.status(200).send(uservalidation);
    } catch (error) {
      res.status(400).send(error);
    }
  }