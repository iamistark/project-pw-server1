const express=require('express');
const app=express();
const PORT=3060;
const HOSTNAME='localhost';
app.get('/',(req,res)=>{
    res.send('i am homepage');
});
app.get('/about',(req,res)=>{
    res.send('i am about page');
});
app.get('/contact',(req,res)=>{
    res.send({email:'support@skills.com'});
});
app.listen(PORT,()=>{
    console.log('Server is running at ${HOSTNAME}:${PORT}');
});
