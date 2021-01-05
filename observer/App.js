const User = require('./User');
const Topic = require('./Topic');
const Store = require('./Store');

const jhon = new User('Jhon Doe');
const mike = new User('Mike William');

const nodeJS = new Topic('NodeJS');
const reactJS = new Topic('ReactJS');

nodeJS.subscribe(jhon);
nodeJS.subscribe(mike);
reactJS.subscribe(mike);

nodeJS.add('A brand new version of NodeJS is out!!!');
reactJS.add('React introduces hooks');
