import { useState } from "react"

export function Assignment1(){
//in this assignment your task is to cal the value of factorial on the basis of userinput 
  const [input,setInput] = useState(0);
  //wrap this inside usememo as this depends on value of input
  const expensiveValue = useMemo(()=>{
    const Value =1;
    for(let i =1; i<=input;++i){
      Value = Value*i;
  
    }
    return Value

  },[input])
 

    return <div>

<input type="text" placeholder="enter a number to calculate factorial " onChange={(e)=>{
   setInput(e.target.value);
}} />
<h1>The output is {input}</h1>
    </div>
}