
// Setup basic express server
const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);


app.use(express.static('public'));
io.on('connection', function(socket){
    console.log('a user connected');  
  
    socket.on('sending', function(data){      
          console.log(data);
        
          io.emit('recieve', data);    
  
    });
      
      
  });
      
      
 
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
    
  });
  
  server.listen(3000, function(){
    console.log('listening on :3000');
  });