// array

const myArr = [0,1,2,3,4,5]
console.log(myArr[0])

const myHeros = ["a", "b", "c"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])


myArr.push(6)
myArr.push(7)
console.log(myArr)

myArr.pop()
console.log(myArr)

myArr.unshift(9)
console.log('unshfit',myArr)
myArr.shift()
console.log('shift',myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr)

const newArr = myArr.join()
console.log(myArr)
console.log(typeof newArr)

// Slice Splice

console.log("A", myArr)
const myN1 = myArr.slice(1,3) // Never modifies original ara
console.log(myN1)

console.log("B ", myArr)

const myN2 = myArr.splice(1,3) // Modifies original array 
console.log("C ", myArr)
console.log(myN2)