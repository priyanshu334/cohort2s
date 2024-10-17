// import { useState } from "react";

import { useState } from "react"

// const App = ()=>{
//   const [count ,setCount] = useState(0)

//   return (
//     <div>
//      <h1>states </h1>
//       <CustomButton count={count} setCount={setCount}/>
//     </div>
//   )
// }
// function CustomButton(props){
//   function changecount(){
//     setCount(count+1)
//   }
//   return <button onClick={changecount}>
//     Couter {props.count}
//   </button>
// }

// export default App;
//creating a todo application
export default function App(){
  const [todos,setTodos]= useState([{
    title:"Go to Gym",
    description:"go to GYm",
    completed:false,
  },{
    title:"Study dsa",
    description:"go to GYm",
    completed:false,
  }
])
function addTodo(){
  setTodos([...todos,{
    title:"new todo",
    description:"new todo added"
  }])
}
function removeTodo(){
  setTodos([])
}
  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
        {todos.map((todo)=>{
          return <Todo title={todo.title} description={todo.description}/>
        })}
        <button onClick={removeTodo}>Remove todo</button>
    </div>
  )
}
const Todo = (props)=>{
  
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  )
}