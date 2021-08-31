'use strict';

// 引用Server类:
const WebSocketServer = WebSocket.Server;

// 实例化:
const server = new WebSocketServer({
    port: 3000
});

server.on('connection', function (ws) {
    console.log(`[SERVER] connection()`);
    ws.on('message', function (message) {
        console.log(`[SERVER] Received: ${message}`);
        ws.send(`ECHO: ${message}`, (err) => {
            if (err) {
                console.log(`[SERVER] error: ${err}`);
            }
        });
    })
});