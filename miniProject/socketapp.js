var exp = require('express');
var app = exp();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(exp.static("./public"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', function (socket) {
//   socket.emit('news', { hello: 'world' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
console.log(socket.id);

socket.on('USER_JOIN',(data)=>{
    io.emit('USER_CONNECTED',{id:socket.id, username:data});
})
socket.on('disconnect', ()=> {
    console.log(socket.id);
    io.emit('USER_DISCONNECTED', socket.id);

})
});

server.listen(3005);