const http=require("http");
const fs=require("fs");
const serever=http.createServer((req,rep)=>{
    console.log("1st line in server");
    console.log(req);
    rep.end("response line2");
const p = fs.readFileSync("index.html", "utf-8");
rep.writeHead(200, { "Content-Type": "text/html" });
rep.end(p);
        res.end(p.toString());

});
serever.listen(8000,()=>{
    console.log("jai ganesha");
    
});