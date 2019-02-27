(function() {
    'use strict';
    var arr = [1,2,3,4,5];
    Array.prototype.even = function() {
        console.log(this);
    };
    arr.even(); 
    var obj = new Object();
    Object.prototype.testone = function() {
        console.log("test");
    }
    obj.testone();
    (function(){
        var obj1 = new Object();
        obj1.testone();
    })();
})();

var marks = [1,2,3,4,5]
var res = marks.filter((x)=>{
    return x%2==0;
});
var res1 = marks.filter(x=>x%2==0)

const a = new 