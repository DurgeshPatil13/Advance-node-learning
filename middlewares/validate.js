const  success  = require("zod");

function validation(Schema){
return (req,res,next)=>{
    const result=Schema.safeParse(req.body)
    if(!result.success){
        return res.status(400).json({
            success:false,
            errors:result.error.issues
        });
    };
    req.body=result.data;
    next();
};
};
module.exports=validation;