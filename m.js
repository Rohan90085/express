const fs=require("fs");
fs.writeFileSync("./new.txt","jai ganesha");
const p=fs.readFileSync("./new.txt","utf-8");
console.log(p);
fs.writeFile("./asyn.txt","hello ganesha",(err)=>{
   
});
fs.readFile("./asyn.txt","utf-8",(t,d)=>{
    console.log(d);
})
fs.mkdirSync("new/a/b,{recursive:true},(err)=>{")