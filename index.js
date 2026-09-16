const express=require("express");
const app=express();
const errorMiddleware = require("./middlewares/middle");
const PORT=8000;
app.get("/",(req,res,next)=>{
     try {
        // Normal task
        const result = null;

        if (!result) {
            throw new Error("Task failed!");
        }

        res.send("Task successful");
    } 
    catch (error) {
        next(error);   // send error to middleware
    }
})
app.use(errorMiddleware)
app.listen(PORT);