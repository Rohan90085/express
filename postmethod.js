const express=require('express');
const fs=require('fs');
let users=require("./usersdata.json");
const app =express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/users',(req,res)=>{
    res.json(users);
});
app.post('/user/add',(req,res)=>{
    const body =req.body;
    const newUser={...body,id:users.length+1};
    users.push(newUser);
    fs.writeFile('./usersdata.json',JSON.stringify(users),err=>{
        if(err){
            res.status(500).json({msg:"not added"});
        }
        res.send(newUser);
    })
})
app.listen(3000,()=>console.log("server started"))