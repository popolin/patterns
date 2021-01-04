// const SignUp = require('./SignUp');

// SignUp.create('Jhon Doe', 'jhondoe@gmail.com', 25, 
//     'jhondoe.jpg', 'jhondoe', ['Javascript', 'Node.js'], 
//     ['Node.js'], true, false);

const SignUpBuilder = require('./SignUpBuilder');

new SignUpBuilder('Jhon Doe', 'jhondoe@gmail.com', 25)
    .setPhoto('jhondoe.jpg')
    .setNick('jhondoe')
    .setAdmin().create();