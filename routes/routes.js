const express=require("express");
const router=express()
const validation=require("../middlewares/validate")
const postdata=require("../controller/controller")
const registerscehma=require("../zod/zod");
router.post("/register",validation(registerscehma),postdata)
module.exports=router;