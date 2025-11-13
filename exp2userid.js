

const express=require('express');
const app=express();
const users=require('./usersdata.json');

     app.get('/users',(req,res)=>{
        //const user=users.find(user=>user.id===parse.int(req.params.id))
         res.json(users);
     })
    app.get('/api/user/:id',(req,res)=>{
        const id=Number(req.params.id);
        const ud=users.find(user=>user.id===id);
        if(ud){
            return res.json(ud.first_name);
        }  
    })
    app.get('/api/user/html',(req,res)=>{
        let output='<h1>Users</h1><ul>';
        const html=`<ul> 
        ${users.map(user=>`<li>${user.first_name}.</li>`).join('')}
        </ul>`;
        res.send(html);
    })
    app.listen(3000,()=>console.log("server started"));