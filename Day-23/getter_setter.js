class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}chai`
    }

    set password(value){
        this._password = value
    }
}

const chai = new User("chai@1.ai", "123")
console.log(chai.email);
