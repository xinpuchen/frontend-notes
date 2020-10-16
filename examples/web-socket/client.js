const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000/ws/chat');
let count = 0;

ws.on('open', function() {
  console.log(`[CLIENT] open()`);
  ws.send('Hello!');
});

ws.on('message', function(data) {
  console.log(`[CLIENT] Received: ${data}`);
  count++;
  if (count > 30) {
    ws.send('Goodbye!');
    ws.close();
  } else {
    setTimeout(() => {
      ws.send(`Hello, I'm Mr No.${count}!`);
    }, 1000);
  }
});
