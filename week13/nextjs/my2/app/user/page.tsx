import axios from "axios"

export default async function(){
    const response = await axios.get('http://localhost:3000/api/user')

  return  <div>
    <h1>{response.data.email}</h1>
    <h1>{response.data.name}</h1>


    </div>
}