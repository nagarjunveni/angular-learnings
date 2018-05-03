const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/api',(req,res)=>{
res.json({
message:'Welcome to the API'
})
})

app.post('/api/login',(req,res)=>{
console.log(req.params);
const user ={
id:1,
username: 'nag',
email:'nag@gmail.com'
}
jwt.sign({user:user},'secretkey',{expiresIn:'30s'},(err,token)=>{
res.json({
token:token
})
})
})
app.post('/api/posts',verifyToken,(req,res)=>{
jwt.verify(req.token,'secretkey',(err,authData)=>{
if(err){
res.sendStatus(403);
}else{
res.json({
message:'Post created...',
authData
})
}

})
res.json({
message:'Post created...'
})
})

app.listen(5000,()=>{
console.log('server started on 5000');
})

//FORMAT OF TOKEN 
//Authorization: Bearer <access_token>
