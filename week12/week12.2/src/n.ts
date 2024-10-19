//readonly 
type User ={
    readonly name :string;
readonly age :number;
}
const user :User={
    name:"hello",
    age:22,
}
//alternamtive 
type Obj ={
    name :string;
    age:number;
}
const obj :Readonly<Obj> ={
   name:"hello",
   age:0,
}

//defining types of object 

type Users = Record<string,{age:number,id:string}>

const users:Users={
    "1":{age:22,id:"l"},
    "2":{age:66,id:"o"}
}