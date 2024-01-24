const express = require('express')
const app = express()
const port = 3000 // "Radiofrekvens"

const players = [{
    name: "Stefan",
    jersey:2,
    age:51,
    id:1
},{
    name: "Foppa",
    jersey:21,
    age:51,
    id:2
},
{
    name: "Sudden",
    jersey:13,
    age:52,
    id:3
}]


app.get('/api/players/1',(req,res)=>{
    res.json(players[0])
});

app.get('/api/players/2',(req,res)=>{
    res.json(players[1])
});

app.get('/api/players/3',(req,res)=>{
    res.json(players[2])
});

app.get('/api/players',(req,res)=>{
     res.json(players)
});

// app.post('/api/players',(req,res)=>{

// });



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  