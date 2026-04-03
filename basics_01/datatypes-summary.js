// Primitive 

// 7 Categories : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
let outSideTemp = null
let userEmail 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(id)
console.log(anotherId)

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["a", "b", "c"]

let myObj = {
    "name": "Ankur",
    "age": 20

}

const myFunction = function() {
    console.log("Hello world")
}

console.log(typeof bigNumber)

// stack (primitive) heap(non primitive)

let nameAnkur = "Ankur"
anotherName = "readyAnkur"

console.log(nameAnkur)
console.log(anotherName)

let userOne = {
    email: "ankur.raj.vns@gmail.com",
    upi: "ankur@gpay"
}

let userTwo = userOne

userTwo.email = "jaya@gmail.com"
console.log(userOne.email)

