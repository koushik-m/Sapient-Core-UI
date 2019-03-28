var domain = require('domain');

var dom = domain.create();

dom.on('error', (er)=> {
    console.log(`error, but ${er.message}`);
});
dom.run(() => {
    require('http').createServer((req,res) => {
        handleRequest(req, res);
    }).listen(4000);
});
