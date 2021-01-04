const SignUp = require('./SignUp');

class SignUpBuilder {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    setNick(nick){
        this.nickname = nick;
        return this;
    }
    setPhoto(photo){
        this.photo = photo;
        return this;
    }
    setTopics(topics){
        this.favoriteTopics = topics;
        return this;
    }
    setSME(sme){
        this.isSme = sme;
        return this;
    }
    setModerator(){
        this.isModerator = true;
        return this;
    }
    setAdmin(){
        this.isAdmin = true;
        return this;
    }

    create(){
        return SignUp.create(this.name, this.email, this.age, 
            this.photo, this.nick, this.favoriteTopics, this.isSme, 
            this.isModerator, this.isAdmin);
    }
}

module.exports = SignUpBuilder;