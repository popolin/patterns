class Phone {
    constructor(
        serialNum, 
        model = 'Generic', 
        processor = 'Generic',
        RAM = '2Gb',
        width = 67.3,
        height = 138.4,
        resolution = '750 x 1334') {
            this.serialNum = serialNum;
            this.configuration = {
                model, 
                processor, 
                RAM, 
                width, 
                height, 
                resolution
            }
        }
    dial(number){
        console.log(`Dialing ${number}...`);
    }
    displayConfiguration(){
        console.log(this.configuration);
    }
}

module.exports = Phone;