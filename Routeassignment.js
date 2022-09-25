const express = require('express');
const server = express();
const fs=require('fs')
const port=8080;
server.listen(port,()=>{
    console.log('Server is listening to ',port)
});
server.get('',(req,res)=>{
    res.send('<h3>My Route are (firstpage/secondpage/thirdpage/forthpage).</h3>')
})
server.get('/firstpage',(req,res)=>{
    res.sendFile(__dirname +'/firstpage.html')
})

server.get('/secondpage',(req,res)=>{
    res.sendFile(__dirname +'/secondpage.html')
})
server.get('/thirdpage',(req,res)=>{
    res.sendFile(__dirname +'/thirdpage.html')
})
server.get('/forthpage',(req,res)=>{
    res.sendFile(__dirname +'/forthpage.html')
})
   


