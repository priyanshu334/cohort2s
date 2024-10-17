// import { useMemo } from "react";
// import { useState } from "react";

import { Assignment4 } from "./components/Assignmet4"

// function App(){
//   const [btn , setBtn] = useState(0)
//   const [inputValue ,setInputValue] = useState(1);
//   let count = useMemo(()=>{
//     let finalcount = 0;
//     for(let i =0; i<=inputValue; ++i){
//       finalcount =finalcount +1;
//     }
//     return finalcount

//   },[inputValue])

//   return (
//     <div>
//       <input type="text" onChange={(e)=>{
//         setInputValue(e.target.value)}} placeholder="find the sum of 1 to n"/>
//         <br />
//        <h2>sum from 1 to {inputValue} is {count}</h2>
//         <br />
          
//       <button onClick={()=>setBtn(btn+1)}>click me -value {btn}</button>
//     </div>
//   )
// }

// export default App;

function App(){
  return (
    <div>
     <Assignment4/>
    </div>
  )
}

export default App