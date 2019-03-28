var http = require('http');
var server = http.createServer();
server.on('request',(req,res)=> {
    res.end('<h1>Welcome</h1>');
    console.log(server.eventNames());
});
server.listen(4000);
console.log(process.pid);