const Rabbit = require('./Rabbit');
const readLine = require('readline');
const exchange = 'announcements';

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

const RabbitSays = async message => {
    try{
        const conn = await Rabbit();
        const channel = await conn.createChannel();
        await channel.assertExchange(
            exchange, 
            'fanout', 
            { durable: false });
        await channel.publish(exchange, '', Buffer.from(message));
        await channel.close();
        await conn.close();
    } catch(error){
        console.log(error.code === 'ECONNREFUSED' ? 'RabbitMQ is Offline' : error);
        process.exit(0);
    }
}

rl.setPrompt(':> ');
rl.prompt();
rl.on('line', message => {
    if(message === 'quit'){
        process.exit();
        return;
    }
    RabbitSays(message);
    rl.prompt();
})