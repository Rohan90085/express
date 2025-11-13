const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
    const log=`${Date.now()}, now received\n`;
    fs.appendFile("log.txt",log,(err)=>{
        if(err) console.log(err);
        console.log("logged");
    res.end("logged successfully rohan king nodemon king");
        
    })
    console.log("2nd line");
   // res.end("response line2");
});
server.listen(8000,()=>{
    console.log("started");
});