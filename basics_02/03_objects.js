// Singleton 
Object.create

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Hitesh",
    age: 18,
    [mySym]: "myKey1",
    location: "Jaipur",
    email: "ankur@gmail.com",
    isLoggedId: false,
    lastLoggedInDays: ["M","T","W","T"]
}

console.log(JsUser.email);

console.log(JsUser["email"]);

console.log(JsUser[mySym]) // This syntax is for accessing symbol

console.log(JsUser["mySym"])

// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
