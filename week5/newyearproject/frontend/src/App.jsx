import { useEffect, useState } from "react";
import { Todo } from "../../backend/db";
import CreateTodo from "./components/CreateTodo";

const App = async ()=>{
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    setTodos(json)
   
  },[])
  const datas = await fetch('http://localhost:3000/todos')
  const json = await datas.json();

  return (
    <div>
      <CreateTodo/>
      <Todo todos={todos}/>

    </div>
  )
}

export default App;