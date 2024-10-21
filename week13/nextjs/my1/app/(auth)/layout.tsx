import React from "react"
export default function({children}:{
    children:React.ReactNode
}){
    return <div className="border-b p-7">
        20% off for the next 3 weeks 
        <div>
            {children}
        </div>
    </div>
}