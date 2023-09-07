const express=require("express");
const userRoutes=express.Router();
const validate=require("../middleware/validate")
const {login,primeContent}=require("./routesFunc");
userRoutes.get("/login",validate,login);
userRoutes.get("/primeContent",validate,primeContent);
module.exports=userRoutes;