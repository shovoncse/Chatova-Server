const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router/router');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(router);
const server = http.createServer(app);
const io = socketio(server);
app.listen(PORT, () => console.log("Server Started at Port:"+PORT));

io.on('connection', (socket) => {
  console.log('We have a New Connection!!!');
  
  socket.on('disconnect', () => {
    console.log('User had left!!!');
  })
})