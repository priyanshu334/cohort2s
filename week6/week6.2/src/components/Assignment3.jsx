import { useMemo, useState } from "react"

export function Assignment3(){
    const [items ,setItems ]= useState([{
        name:'Chocolates',value:10
    },{
        name:'chips',value:20
    },{
        name:'Onion',value:30
    },{
        name:'Tomato',value:30,
    }])


    const TotalValue = useMemo(()=>{
        const totalValue =0;
    for(let i =0; i<items.length; ++i){
        totalValue+=items[i].value;
        return totalValue;
    }

    },[items])

    
    return (
        <div>
            <ul>
                {items.map((item,index)=>{
                    return <li key={index}>
                        {item.name}- Price ${item.value}

                    </li>
                })}
            </ul>

        </div>
    )
}