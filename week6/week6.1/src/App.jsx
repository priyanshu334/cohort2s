// function App(){
//   return (
//     <div>



//   <CardWrapper innerComponet={<TextComponent/>}/>
//     </div>
//   )
// }

// function CardWrapper({innerComponet}){
//   return 
//   <div style={{broder:"2px solid black"}}>
//     {innerComponet}

//   </div>
// }
// function TextComponent(){
//   return 
//   <div>
//     Hello
//   </div>
// }
// export default App;

///wraping up components 
function App(){

  return (
    <div>
       <WraaperComponent>
        <div>Hello</div>
       </WraaperComponent>
    </div>
  )
}
function WraaperComponent({children}){
  return (
    <div style={{backgroundColor:"black" ,text:"white"}}>
           {children}
    </div>
  )
}
export default App;