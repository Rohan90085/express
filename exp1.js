// const http=require('http');
const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send(`Hello World ${req.query.name}`);
});
app.get('/about',(req,res)=>{
    res.send(`About Page ${req.query.name} u r age is${req.query.age}`);
})
app.listen(3000,()=>console.log('server started'))
// const server=http.createServer(app)
// server.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })
