const express=require("express");
const port=9000;
const nodeData=require("./nodeData");
const app=express();
// Create two middlewares one should be applicable to all the routes 
// present in backend application is containing and other should be 
// applicable to any 2 specific routes 
const userRoutes=require("./Routes/userRoutes");
const AppMiddleware=(req,res,next)=>{
console.log("app middleware is run");
next();
}
app.use(AppMiddleware);
app.use("/user",userRoutes);
app.get("/home",(_,res)=>{
    res.send(`<h1>hello welcome to our server which is running on ${port}
   <br> to access primeContent=<a href="http://localhost:9000/user/primeContent?pwd=123">To primeContent</a> (pwd=123)
   <br> and <br> to access login =<a href="http://localhost:9000/user/login?pwd=123">To login</a> (pwd=123) </h1>`)
})
app.get("/api/main",(_,res)=>{
    res.send(nodeData);
})
app.listen(port,()=>{
    console.log(`your port is live on ${port}`);
})