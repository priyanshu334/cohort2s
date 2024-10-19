import express from 'express'
import {z} from 'zod'

const app = express();

const userProfile = z.object({
    name:z.string().min(1,  {message:"this cannot be empty"}),
    email:z.string().email({message:"invalid email id "}),
    age:z.number().min(18,{message:"chal be gandu"}).optional()
})
type FinalUserSchema = z.infer<typeof userProfile>//thats how you can infer types on the basics of zod schema 
c

app.put("/",async (req:any,res:any)=>{
    const {success} = userProfile.safeParse(req.body);
    const updateBody:FinalUserSchema = req.body;
    


})
app.listen(3000,()=>[
    console.log("listing at port")
])