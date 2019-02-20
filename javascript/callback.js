// passing function as a parameter to another function
'use strict';
var initValue;
initValue =10;
function counter(callback) {
    if(initValue > 0) {
        console.log(initValue);
        initValue--;
        callback(callback);
    } else {
        console.log("else part");
    }
}

function init(cb) {
    cb(cb);
}
init(counter);