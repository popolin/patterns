// const ScoreBoard = require('./Scoreboard');
// const scores = new ScoreBoard();
const scores = require('./Scoreboard')

class Player {
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
    wins(points){
        scores.update(this.name, points);
    }
    loses(points){
        scores.update(this.name, -points);
    }
}

module.exports = Player;