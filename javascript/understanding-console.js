'use strict';
init()
var init = function() {
    console.log(typeof init);
    console.log("this is in var init")
}
init()
function init() {
    var firstName, lastName;
    console.log(getFullName('hey','there'));
    console.log(typeof init);
}
init()



function getFullName(fname, lname) {
    return fname+lname;
}

init();
