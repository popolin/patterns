class Scoreboard {
    constructor(){
        this.board = [];
    }

    join (name){
        this.board.push({
            name, points: 0
        });
    }
    leave(name){
        this.board = this.board.filter(player => player.name !== name);
    }
    update(name, points){
        const playerIndex = this.board.findIndex(player => player.name === name);
        if(playerIndex > -1) {
            this.board[playerIndex].points += points;
        }
    }
    getBoard() {
        return this.board;
    }
    sort() {
        return this.board.sort((x, y) => y.points - x.points);
    }
}

module.exports = new Scoreboard();