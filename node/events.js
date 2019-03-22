// import { EventEmitter } from 'events';
var EventEmitter = require('events');
class Publish extends EventEmitter {
    // constructor() {

    // }
}

let testPublish = new Publish();
testPublish.on('check', function(a,b) {
    console.log(a, b, this);
});

console.log(testPublish.emit('check','Sapient','Nodejs'));
