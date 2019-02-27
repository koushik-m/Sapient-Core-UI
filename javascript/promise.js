var promise = new Promise((resolve,reject) => {
    console.log("Im second")
    reject('I am the rejectedData');

    if(true) {
        resolve('I am the resolved Data');
    } else {
        reject('I am the rejectedData');
    }
});
promise.then(data=> {
    console.log(data);
}).catch(err=>{
    console.log(err);
})

console.log('I am first');

var promise1 = new Promise((resolve,reject) => {
    console.log("Im second1")
    reject('I am the rejectedData1');

    if(true) {
        resolve('I am the resolved Data1');
    } else {
        reject('I am the rejectedData1');
    }
});
promise1.then(data=> {
    console.log(data);
}).catch(err=>{
    console.log(err);
})

console.log('I am first1');