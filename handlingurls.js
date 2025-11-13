const http=require('http');
const server=require('url');
const server=http.createServer((req,res)=>{
    const myurl=url.parse(req.url,true);
    console.log(myurl);
    switch(myurl.pathname){
        case "/":
            res.end("home page");
            break;
         case '/about':
            const name=url.query.myname;
            res.end("about page "+name);
            break;
            default:
                res.end("invalid page");
    }
});
server.listen(8000,()=>
console.log("started")
);