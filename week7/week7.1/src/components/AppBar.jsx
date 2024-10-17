import { useNavigate } from "react-router-dom"

export function AppBar(){
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <button onClick={()=>{
                  navigate('/landing')
                }}>Go to landing page</button>
                  <button onClick={()=>{
                  navigate('/dashboard')
                }}>Go to Dashboard page</button>
            </div>
        </div>
    )
}