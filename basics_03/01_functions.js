// function sayMyName() {
//     console.log("A")
//     console.log("N")
//     console.log("K")
//     console.log("U")
//     console.log("R")
// }

//sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }

// addTwoNumbers()
// const result = addTwoNumbers(1,3)
// console.log("Result", result)

// function loginUserMessage(userFullName) {
//     return `${userFullName} just logged in`
// }


// function loginUserMessage(userFullName) {
//     if(userFullName === undefined){
//         console.log('please pass a vlaue')
//         return
//     }
//     return `${userFullName} just logged in`
// }

function loginUserMessage(userFullName) {
    if(!userFullName){
        return 'please pass a vlaue'
    }
    return `${userFullName} just logged in`
}


console.log(loginUserMessage("John Doe"))

console.log(loginUserMessage(""))

function caluclateCartPrice(num1){
    return num1
}

function caluclateCartPrice(...num1){ // With object this is called as spread operator and with function it is called as rest operator
    return num1
}

console.log(caluclateCartPrice(2,3,4))

const user = {
    "name": "Ankur",
    "price": 19
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({name:"Mahi", price:"22020"})

const myNewArray = [20,30,40,50]
function returnSecondValue(myNewArray){
    return myNewArray[1]
}

console.log(returnSecondValue(myNewArray))