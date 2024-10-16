const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const PORT = 3000;
const users = [{
    name:"harkirat",
    kidneys:{
        healthy:false, 
    }
}]
// let sum = (n)=>{
//     sum = 0
//     for(let i =0; i<n.length;++i){
//       sum +=i;
//     }

//     return sum;

// }

// app.get('/',(req,res)=>{
//     let n = req.query.n;
//     const ans = sum(n);
//     res.send(ans.toLocaleString());
// })
app.get('/',(req,res)=>{
    const johnkidneys = users[0].kidneys;
    const noofKedneys = johnkidneys.length;
    let numofhealthykidneys = 0;
    for(let i =0; i<noofKedneys; ++i){
        numofhealthykidneys+=i;
    }
    const numofUnhealthykidneys = noofKedneys-numofhealthykidneys;
    console.log(johnkidneys)
    res.json({
        noofKedneys,
        noofKedneys,
        numofUnhealthykidneys,
    })
  
})
app.post('/',(req,res)=>{
     const isHealthy = req.body?.isHealthy;
     users[0].kidneys.push({
        healty:isHealthy,
     })
     res.json({
        msg:done
     })
})

app.listen(PORT,()=>{
    console.log("listning at")
})