const Phone = require('./Phone');

class IPhoneXr {
    constructor(serialNum){
        return new Phone(serialNum, 'iPhone Xr', 'A12 Bionic', '3 Gb', 75.7, 150.9, '828 x 1792')
    }
}

module.exports = IPhoneXr;