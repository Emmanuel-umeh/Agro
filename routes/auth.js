const express = require("express")
const router = express.Router();





    router.get("/",(req,res)=>{
        res.render('index.ejs')
    })

    
    router.get("/about",(req,res)=>{
        res.render('home/about.ejs')
    })

    router.get("/contact",(req,res)=>{
        res.render('home/contact.ejs')
    })




    module.exports = router





