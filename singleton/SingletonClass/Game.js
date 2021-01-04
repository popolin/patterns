// const ScoreBoard = require('./Scoreboard')
// const scores = new ScoreBoard();
const scores = require('./Scoreboard')

class Game {
    joins(player){
        scores.join(player.getName());
    }
    scores(){
        return scores.getBoard();
    }
    getWinner(){
        return scores.sort()[0];
    }
}

module.exports = Game;