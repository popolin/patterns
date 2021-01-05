const Server = require('./Server');
const Client = require('./Client');

const wsUri = 'ws://localhost:3000';
const wsServerPort = 3000;

new Server(wsServerPort);

const client = new Client(wsUri);
client.send('This is my first message', res => console.log(`Task 1: ${res}`));
client.send("Hello Node.js. I'm a server!", res => {
    console.log(`Task 2: ${res}`);
})