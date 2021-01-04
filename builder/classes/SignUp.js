const User = require('./User');
const UserPref = require('./UserPref');

class SignUp {
    create(name, email, age, photo, nickname, favoritTopics, isSME, isModerator, isAdmin) {
        const newUser = new User(name, email, age, photo);
        new UserPref(newUser, nickname, favoritTopics, isSME, isModerator, isAdmin);
    }
}

module.exports = new SignUp();