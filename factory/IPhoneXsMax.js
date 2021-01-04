const Phone = require('./Phone');

class IPhoneXsMax {
    constructor(serialNum){
        return new Phone(serialNum, 'iPhone Xs Max', 'A12 Bionic', '4 Gb', 77.4, 157.9, '1242 x 2688')
    }
}

module.exports = IPhoneXsMax;