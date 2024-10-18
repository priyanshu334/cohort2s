import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username:string,password:string,firstName:string,lastName:string){
//   const res = await  prisma.user.create({
//         data:{
//             email:username,
//             password,
//             firstname:firstName,
//             lastname:lastName,
            
//         }
//     })
//     console.log(res)
// }
// insertUser("harkirat@gmail.com","password","firstname","lastname");

interface UpdateParams {
    firstname:string,
    lastname:string
}
async function updateuser(username:string,{
    firstname,
    lastname,
}:UpdateParams){
   prisma.user.update({
    where:{email:username},
    data:{
        firstname,
        lastname,
    }
   })
}