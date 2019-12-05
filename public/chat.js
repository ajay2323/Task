const socket = io();

$('form').submit(function(){
   
    socket.emit('sending', $('#m').val());
    $('#m').val('');
    return false;
  });


socket.on('recieve', function(msg){
  $('#messages').append($('<li>').text(msg));
});