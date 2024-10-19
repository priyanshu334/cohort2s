interface user{
    id:string;
    name:string;
    age:number;
    email:string;
    password:string;

}

type UpdateProp2 ={
    email?:string;
    name?:string;
    age?:number;
}//all the propeties of this type are optional so it is called paritial type 
///pulling out some propertises from user interface the api used is called pick let's see the syntax
type UpdateProp = Pick<user ,'name'|'email'|'age'>
type UpdatePropsOptional = Partial<UpdateProp> //all the propertices of this feild become optional 
function sumofAge(user1:user , user2:user){
   return user1.age +user2.age;
}
// const age = sumofAge({
//    name: "hari",
//     age: 22
// },{
//  name:"jadu",
//  age:23
// })
// console.log(age)
function updateprops(UpdateProp:UpdateProp){
UpdateProp.email = "hari";

}