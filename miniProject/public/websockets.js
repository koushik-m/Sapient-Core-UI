// var socket = io.connect('http://localhost:3005');

var socket = '';
socket = io.connect('http://localhost:3005');

$('#btnEnter').bind('click',()=> {
    socket.emit('USER_JOIN',$('#username').val());
    
    
     
})
socket.on('USER_CONNECTED', function (data) {
    console.log(data);
    let htmlString = `<li class="list-group-item">${data.username}<li>`
    $('#userList').append(htmlString);
  });
  socket.on('USER_DISCONNECTED', function (data) {
    console.log(data);
   
  });
  