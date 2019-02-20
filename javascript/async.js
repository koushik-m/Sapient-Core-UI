'use strict';
var count = 5;
function iLoveThis() {
    console.log(count);
    count--;
}
setTimeout(iLoveThis,5002);
setTimeout(iLoveThis,5001);
setTimeout(iLoveThis,5000);