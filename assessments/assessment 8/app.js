const exp = require('express');
const app = exp();
const fs = require('fs');
const path = require('path');
var http= require('http');



app.use(exp.static('./public'));

app.get('/', (req,res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})

app.get('/getdata', (req,res) => {
    let src = fs.createReadStream('./jumbo.txt');
    src.pipe(res);
})


app.listen(3000);