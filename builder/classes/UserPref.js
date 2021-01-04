class UserPref {
    constructor(user, nickname, favoritTopics, isSME, isModerator, isAdmin){
        this.user = user;
        this.nickname = nickname;
        this.favoritTopics = favoritTopics;
        this.isSME = isSME;
        this.isModerator = isModerator;
        this.isAdmin = isAdmin;

        console.log(`${user.name}[nickname] = ${nickname}`)
        console.log(`${user.name}[isSME] = ${isSME}`)
        console.log(`${user.name} is ${isModerator ? '' : 'not'} a moderator and is ${isAdmin ? '' : 'not'} admin`)
    }
}

module.exports = UserPref;