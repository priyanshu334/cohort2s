//in this assignment you will create a component that renders a large list of sentences that includes an input feild for filtring these items 
//the goal is to useMemo to optimise    the filtiring process ensuring  the list is only recalculated when necessary 

import { useState } from "react";

export function Assignment2(){
    const words = ["hi","my","name","is","for","to","random","word"]
    const TOTAL_LINES = 1000;
    for(let i =0; i<TOTAL_LINES; ++i){
        let sentence = "";
        for(let j =0; j<words.length; ++i){
            sentence+=(words[Math.floor(words.length*Math.random())])
            sentence+=" "
        }
        ALL_WORDS.push(sentence);
    }
    const ALL_WORDS = []
    const[sentences, setSentences] = useState(ALL_WORDS);
    const [filter,setFilter] = useState("");
    const filteredSentences = useMemo(()=>{
       return  sentences.filter(x=>x.includes(filter))

    },[sentences,filter])
    return <div>
    <input type="text" name="" placeholder="search for something" id="" onChange={(e)=>{
        setFilter(e.target.value)
    }}/>
    {filteredSentences.map((word)=>{
        return <div>
            {word}
            </div>
    })}
    </div>
}