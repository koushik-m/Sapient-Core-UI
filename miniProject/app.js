const exp = require('express');
const bodyParser = require('body-parser');
const app = exp();
const path = require('path');
const datas = require('./data')
const fs = require('fs')
var rp = require('request-promise');


app.use(exp.static('./public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, './')
    })
})

app.post('/api/search',(req,res) => {
    console.log(req.body);
    var walmarturl = "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=";
    walmarturl += req.body.searchTerm;
    console.log(walmarturl);
    rp(walmarturl)
    .then(function (htmlString) {
        // Process html...
        console.log(htmlString);
        
        res.json(JSON.parse(htmlString));
    })
    .catch(function (err) {
        // Crawling failed...
    });
    // res.json({
    //     // data:[],
        
    // // })
    // res.json(datas);
    // console.log(res);
})
app.listen(3000);