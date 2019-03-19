var f = require('fs');

f.exists('./demo',(result)=>{
    if(!result) {
        f.mkdir('./demo', (err,result)=>{
            if(err) {
                console.log(err);
            } else {
                console.log(result);
            }
            console.log('done with the creation')
        });
    } else {

        console.log('folder already exist');
    }
})


console.log('I am called first');