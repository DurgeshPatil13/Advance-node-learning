const express=require("express");
const app=express();
const router=require("./routes/routes");
app.use(express.urlencoded({ extended: true }));
const connectdb=require("./connection/dbconn")
const errorMiddleware = require("./middlewares/middle");
const PORT=8000;
connectdb("mongodb://localhost:27017/zod");
app.use("/user",router);
app.use(errorMiddleware)
app.listen(PORT,()=>{
    console.log("success")
});