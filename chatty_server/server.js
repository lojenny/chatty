// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${PORT}`));

const wss = new SocketServer({ server });

//broadcasting function to all clients//
broadcast = (data) => {
  wss.clients.forEach(function (client) {
    client.send(data);
  })
}

//broadcastback function that calls on broadcast function to send messages//
broadcastBack = (message) => {
  wss.broadcast(message);
}

// function broadcastBack(message) {
//   wss.broadcast(message);
// }

//handleNewConnection function that updates the user connection count to all clients on new connection//
handleNewConnection = () => {
  const connectionNotification = {
    content: `New user connected`,
    type: 'incomingNewConnection',
    id: uuidv4(),
    numberConnection: wss.clients.size
  }
  broadcast(JSON.stringify(connectionNotification));
}

//handleNewConnection function that updates the user connection count to all clients on disconnection//
handleDisConnection = () => {
  const connectionNotification = {
    content: `User disconnected`,
    type: 'incomingNewConnection',
    id: uuidv4(),
    numberConnection: wss.clients.size
  }
  broadcast(JSON.stringify(connectionNotification));
}

wss.on('connection', (ws) => {
  console.log('Client connected');
  handleNewConnection();


  ws.on('message', (event) => {
    const messageParse = JSON.parse(event);

    if (messageParse.type === 'postNotification') {
      messageParse.id = uuidv4();
      messageParse.type = 'incomingNotification';
      broadcast(JSON.stringify(messageParse));
    } else if (messageParse.type === 'postMessage') {
      messageParse.id = uuidv4();
      messageParse.type = 'incomingMessage';
      broadcast(JSON.stringify(messageParse));
    } else {
      console.log('Message type is not recognized:', messageParse.type);
    }
  })

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    handleDisConnection();
  });
});