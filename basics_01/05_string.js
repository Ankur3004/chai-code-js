const nameAnkur = "ankur"
const repoCount = 50 

console.log(nameAnkur + repoCount)

console.log(`Hello my name is ${nameAnkur} and my repo count is ${repoCount}`)

const gameName = new String("mynameisankur")
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne =  " hitesh "
console.log(newStringOne);
console.log(newStringOne.trim());

const url =  "https://random-ankur.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('hitesh'))

console.log(url.includes('ankur'))


