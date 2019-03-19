// for(var i = 0; i < 10000000000; i++){}

const http = require('http');
http.createServer((req,res)=>{
    console.log("hi");
    setTimeout(()=>{res.end("<h1>Welcome to nodejs</h1>")},5000);
}).listen(4000);