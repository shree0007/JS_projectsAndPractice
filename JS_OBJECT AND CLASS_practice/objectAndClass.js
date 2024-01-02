
//object literal 
const user = {
    username: "Shree",      //these are properties with key and value pair
    loginCount: 10,
    signedIn: true,

    getUserDetails: function () {           //this is called a method or function
        console.log("Got user details from database");
        console.log(`username:${this.username}`); //this reprsents user object
    }
}
console.log(user.username)
console.log(user.getUserDetails())



// class

class USER {
    constructor(username, email, password) {   //constructor is used only for properties
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {                      //method or function 
        return `${this.password}abc`
    }
    changeUsername() {                       //method or function 
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new USER(           //instance of inheritance, meaning object user1 inherites the properties 
    "Shreeram",                   // and methods from USER class
    "example.com",
    "123",
)
const user2 = new USER(
    "Superman",
    "super.com",
    "1020",
)

console.log(user1)
console.log(user1.encryptPassword())
console.log(user1.changeUsername())

console.log(user2)
console.log(user2.encryptPassword())
console.log(user2.changeUsername())



// extends

class Teacher1 {
    constructor(username) {
        this.username = username
    }
    logMe() {
        return (`USERNAME is ${this.username}`)
    }
}

class Teacher2 extends Teacher1 {               //Teacher2 class inherties the properties of Teacher1
    constructor(username, email, password) {    // Teacher1 is called (superclass) and Teacher2 subclass
        super(username)
        this.email = email
        this.password = password
    }
    addCourse() {
        return (`A new course was added by ${this.username}`)
    }
}

const exampleTeacher = new Teacher2("ABC", "email.com", "222")

console.log(exampleTeacher.logMe())     // Logs: USERNAME is ABC
console.log(exampleTeacher.addCourse())
//since the username property is inhertiated from Teacher1  to Teacher2, we can access both functions (logMe and addCourse present in separate classes Teacher1 and Teacher2)

// Note when you use static keyword before method for instance static logMe, we cannot access to this function by others sub classes and inheritances