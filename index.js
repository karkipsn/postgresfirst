const express = require('express');
const bodyParser = require('body-parser');
const bc = require('bcrypt');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/hi',(req,res)=>{
    console.log("HI");
})

app.post('/register',(req,res)=>{
    
    let name = req.body.name;
    let username = req.body.username;
    let password = req.body.password;
    db.users.putInfo(name,username,password,(err,result)=>{
        if(err){
            console.log("Error");
        }
        else{
            res.send(result);
        }
    })
});

app.listen(6666,()=>{
    console.log("App is runing on port 6666");
});