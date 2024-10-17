import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Landing =  React.lazy(()=> import( "./components/Landing")) 
import { AppBar } from "./components/AppBar";

function App(){

return (
  <BrowserRouter>
  <AppBar/>
    <Routes>
      <Route path="/landing" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
    </Routes>
  </BrowserRouter>
)
}
function Buttonis(){
  return <div>
    
  </div>
}

export default App;