const events = require('./EventBus');
const colors = require('colors');

class Store {
    constructor(){
        events.on('new-post', data => this.saveDb(data));
    }
    saveDb({topic, message}){
        console.log(colors.red(`STORE :: Storing "${colors.yellow(
            message)}" under topic :: ${topic.toUpperCase()}`));
    }
}
module.exports = new Store();