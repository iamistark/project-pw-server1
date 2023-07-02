const express=require('express');
const app=express();
const PORT=3090;
const HOSTNAME='localhost';
let counter=0;
app.get('/',(req,res)=>{
    res.json({counter});
});
app.post('/increment',(req,res)=>{
    counter++;
    res.json({counter});
});
app.post('/decrement',(req,res)=>{
    counter--;
    res.json({counter});
});
app.listen(PORT,()=>{
    console.log('Server is running on ${HOSTNAME}:${PORT}');
});