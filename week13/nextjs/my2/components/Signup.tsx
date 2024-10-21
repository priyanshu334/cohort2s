'use client'
import { useState } from "react"
import axios from "axios"

export function Signup(){
    const [userName , setUserName]= useState("" )
    const [password , setPassword] = useState("")
    return (
        <div className="flex flex-col justify-center h-screen">
        <input onChange={e=>setUserName(e.target.value)} type="text" name="" id=""  placeholder="username"/>
        <input onChange={e=>setPassword(e.target.value)}  type="password" name="" id="" placeholder="password" />
        <button onClick={()=>{
            axios.post("http://localhost:3000/api/user",{
                userName,
                password
            })
        }}>Sign up</button>
    </div>
    )
}