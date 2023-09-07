const validate=(req,res,next)=>{
    // const age=req.params.age;
    console.log("specific middleware is run");
    if(Number(req.query.pwd)===123){
        next();
    }else{
        res.send("not allowed!!");
    }

}
module.exports=validate;