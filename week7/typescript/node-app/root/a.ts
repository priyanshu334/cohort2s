interface User{
    firstName:string,
    lastName:string,
    age:Number,
    email?:string,//optionally email can be passed or not

}//let's you define the user  

type user1 ={
    name:string,
    email:string|number,
    age:number
}
function greet(user:user1){
    console.log(user.age)
}
type Employee ={
    name:string,
    email:string,
}
interface manager {
    name:string,
    age:number,
}
type Teamlead = Employee & manager;
