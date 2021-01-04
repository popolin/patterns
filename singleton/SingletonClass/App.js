const Game = require('./Game');
const Player = require('./Player');

const pete = new Player('Pete');
const mike = new Player('Mike');

const poker = new Game();

poker.joins(pete);
poker.joins(mike);

pete.wins(30);

mike.wins(20);
mike.wins(10);
mike.wins(10);
mike.wins(40);

pete.wins(1000);
pete.loses(1000);

console.log('Scoreboard: ', poker.scores());
console.log(`Winner: ${poker.getWinner().name} with ${poker.getWinner().points} points`);