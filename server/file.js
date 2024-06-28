const express=require('express')
const app=express()
const cors=require("cors")
const connection = require('./connection.js')
connection()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

const authRoutes=require('./routes/users.js')
const loginRoutes=require('./routes/auth.js')

app.use("/api/auths",authRoutes);
app.use("/api/login",loginRoutes);

app.listen(3000,()=>console.log('!!!!listening!!!'))