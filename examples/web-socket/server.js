const WebSocket = require('ws');

const WebSocketServer = WebSocket.Server;

const wss = new WebSocketServer({
  port: 3000,
});

wss.on('connection', function(ws) {
  console.log(`[SERVER] connection`);
  let mesTimer;
  ws.on('message', function(data) {
    console.log(`[SERVER] Received: ${data}`);
    // 可利用 wss.clients 获取所以在线客户端，遍历发送消息
    // wss.clients.forEach(c => {
    //   setTimeout(() => {
    //     c.send(data);
    //   }, 1000);
    // });
    mesTimer = setTimeout(() => {
      ws.send(`What's your name?`, err => {
        if (err) {
          console.log(`[SERVER] Received: ${err}`);
        }
      });
    }, 1000);
  });
  ws.on('close', function(e) {
    console.log(`[SERVER] close()`);
    // mesTimer && clearTimeout(mesTimer);
  });
});

console.log('ws server started at port 3000...');
