const http = require('http');
const express = require('express');
const aplicacao = express();

const serverhttp = http.createServer(aplicacao);
const io = require('socket.io')(serverhttp);

aplicacao.use(express.static('public'));

io.addListener('connection', (socket) => {
    console.log('um user se conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem',msg);
    })
})
//ip para mesma net em diferentes dispositivos
serverhttp.listen(1007);

//para se conectar use node --watch ./server