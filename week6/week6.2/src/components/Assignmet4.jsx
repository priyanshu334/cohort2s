///create a counter component with increment and decrement functions passs the functions to a child 
//component which performs increment and decrement functions    Use useCallback to ensure that these functions doesnot rerender on every function render

import { useState,memo, useCallback } from "react"

export function Assignment4(){
    const [count ,setCount ] = useState(0);

    const hancleDecrement =  useCallback(()=>{
        setCount(count-1);
    },[count])
    

    const handleIncrement =  useCallback(()=>{
        setCount(count+1);
    },[count])
    

    return (
        <div>
            <p>Value is {count}</p>
            <Custombutton increment={handleIncrement} decrement={hancleDecrement}/>

        </div>
    )
}

const Custombutton = memo(({increment,decrement})=>{
    return (
        <div>
              
               <button onClick={increment}>Increment </button>
               <button onClick={decrement}>Decrement </button>

        </div>
     
    )
})