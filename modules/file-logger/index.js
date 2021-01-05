const { appendFile } = require('fs');
const { join } = require('path');

const logFile = join(__dirname, 'activity.log');

const write = (log) => {
    if(log){
        appendFile(logFile, `${new Date()}: ${log}\n`, error => {
            if(error){
                return console.log('There was an error writing on the log file');
            }
        });
    }
};

module.exports = {write}