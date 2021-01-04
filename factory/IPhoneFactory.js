const IPhoneXr = require('./IPhoneXr');
const IPhoneXs = require('./IPhoneXs');
const IPhoneXsMax = require('./IPhoneXsMax');

class IPhoneFactory {
    create(type, serialNumber){
        switch (type) {
            case 'IPhoneXr':
                return new IPhoneXr(serialNumber)
            case 'IPhoneXs':
                return new IPhoneXs(serialNumber)
            case 'IPhoneXsMax':
                return new IPhoneXsMax(serialNumber)
            default:
                console.log('Unkown iPhone');
        }
    }
}

module.exports = new IPhoneFactory();