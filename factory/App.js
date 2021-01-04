// const Phone = require('./Phone');

// const iPhone = new Phone('IPXR-0001', 'iPhone Xr', 'A12 Bionic', '3 Gb', 75.7, 150.9, '828 x 1792');

//////
// iPhone.displayConfiguration();
// iPhone.dial(983838383);

// const IPhoneXr = require('./IPhoneXr');
// const newIphoneXr = new IPhoneXr('IPXR-0001');

// newIphoneXr.displayConfiguration();
// newIphoneXr.dial(983838383);

//////
// const IPhoneXr = require('./IPhoneXr');
// const IPhoneXs = require('./IPhoneXs');
// const IPhoneXsMax = require('./IPhoneXsMax');

// const newIphoneXr = new IPhoneXr('IPXR-0001');
// const newIphoneXs = new IPhoneXs('IPXS-0001');
// const newIphoneXsMax = new IPhoneXsMax('IPXMXS-0001');

// newIphoneXr.displayConfiguration();
// newIphoneXr.dial(983838383);

// newIphoneXsMax.displayConfiguration();

const iPhoneFactory = require('./IPhoneFactory');

const iPhoneXr = iPhoneFactory.create('IPhoneXr', 'XR-0001');
const iPhoneXs = iPhoneFactory.create('IPhoneXs', 'XS-0002');
const iPhoneXsMax = iPhoneFactory.create('IPhoneXsMax', 'XS-0003');

iPhoneXr.displayConfiguration();
iPhoneXs.displayConfiguration();
iPhoneXsMax.displayConfiguration();