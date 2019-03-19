var fs = require('fs');
var http= require('http');
http.createServer((req,res)=> {
    // fs.readFile('./jumbo.txt',(err,data)=> {
    //     if(err) {
    //         res.end(err);
    //     } else {
    //         res.end(data);
    //     }
    // })
    let src = fs.createReadStream('./jumbo.txt');
    src.pipe(res);
}).listen(5000);

console.log('done with the program');