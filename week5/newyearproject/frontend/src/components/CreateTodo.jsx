import { useState } from "react";

const CreateTodo = ()=>{
    const [titles,setTitles] =useState("")
    const [description,setDescription] = useState("")
    return (
        <div>
            <input style={{padding:10, margin:10}} onChange={(e)=>{
                setTitles(e.target.value)
            }} type="text" placeholder="title"/>
            <input style={{padding:10, margin:10}} onChange={(e)=>[
                setDescription(e.target.value)
                
            ]} type="text" placeholder="description" />
             <button onClick={()=>{
                fetch("http://localhost:3000/todos" ,{
                    method:"POST",
                    body:JSON.stringify({
                      title:titles,
                      description:description
                    }),
                    headers:{
                        "content-type":"application/json"
                    }
                }).then(async function(res){
                    const json = await res.json();
                    alert("todo added")
                })
             }}>Add a Todo</button>
        </div>
    )
}

export default CreateTodo;