const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/dbjobprotal").then(()=>{
    console.log(`connection succesfull`);
}).catch((err)=>{
    console.log(`error:${err}`);
})
