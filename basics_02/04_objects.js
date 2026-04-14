// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ankur"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "koi@gmail.com",
    fullName : {
        userFullName: {
            "firstName": "ankur",
            "lastNmae": "mishra"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

const obj1 = {1:'a', 2:'b'}
const obj2 = {3: 'a', 4: 'b'}

const obj3 = {obj1, obj2}
console.log(obj3)

// const obj4 = Object.assign()
// console.log(obj4)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

const users = [{
    'id': 1,
    'email': 'user@gmail.com'
}, {
    'id': 2,
    'email': 'user2@gmail.com'
}]

console.log(users[1].emailId)
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "physics",
    price: 90,
    courseInstructor: "ankur"
}

const {courseInstructor: instructor} = course

console.log(instructor)


const navBar = ({company}) => {
    
}