class User {
    constructor(name, email, age, photo){
        this.name = name;
        this.email = email;
        this.age = age;
        this.photo = photo;
        console.log(`New user: ${name}. He's ${age}.`);
    }
}

module.exports = User;