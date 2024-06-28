const {User,validate} = require("../model/user");
const bcrcypy= require("bcrypt") 
const router= require("express").Router();

router.post("/",async(res,req)=>{
    try{
        const {error}=validate(req.body);
        if(error)
            return res.status(400).send(error.details[0].message);
        const user=await Auth.findOne({email:req.body.email});
        if(user)
            return res.status(400).send("User already registered");
        const salt = await bcrypt.genSalt(Number(10))
        const hash = await bcrypt.hash(req.body.password, salt)

        await new Auth({...req.body,password:hashPassword}).save()
        res.status(201).send({message:"User Created"})
    }
    catch(err){
        return res.status(500).send(err.details[0].message);
}})

module.exports=router;