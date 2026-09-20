const z=require("zod")
const registerscehma=z.object({
    name:z.string().min(3,"name must be of atleast 3 characters").max(15,"name cant be this big"),
    age:z.coerce.number().min(18,"age small").max(50,"too old"),
    email: z.email("invalid email")
})
module.exports=registerscehma;