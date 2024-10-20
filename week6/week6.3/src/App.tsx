import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

function App(){

  return (
    <div>

    </div>
  )
}
function Count(){
  return <div>

  </div>
}


function CountRender(){
  const count = useRecoilValue(countAtom);
  return <div>
    <b>
      {count}
    </b>
  </div>
}
function Buttons(){
   const setCount = useSetRecoilState()
}
export default App;

