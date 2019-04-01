var fs = require('fs');
fs.writeFile('./myfile.txt', 'whats up bugger!!!!!!!!!',(err, result)=> {

});

let file = fs.createWriteStream('./jumbo.txt');
for(let i = 0; i <= 1e6; i++) {
    file.write(`most fastest framework which is best suitable for streaming.`);
}
file.end();