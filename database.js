const { Client }=require('pg')
const db= new Client({
    host:'localhost',
    user:'postgres',
    password:'Rohanph@900',
    port:5432,
    database:"jai ganesha"
})
db.connect().then(()=>console.log("database connected"))
db.query('select * from demo',(err,res)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
})
