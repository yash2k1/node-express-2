const express=require("express");
const port=9000;
const nodeData=require("./nodeData");
const app=express();
app.get("/home",(_,res)=>{
    res.send(`<h1>hello welcome to our server which is running on ${port}</h1>`)
})
app.get("/api/main",(_,res)=>{
    res.send(nodeData);
})
app.listen(port,()=>{
    console.log(`your port is live on ${port}`);
})