let num: number
const five: number = 5

console.log("||||||||||||||MATH EXPRESSIONS|||||||||||||||||||")
// math expressions
// PEMDAS
num = five + five - five * five / five
console.log(num)
num = 5 + (5 - 5 * 5) / 5
console.log(num)
num = 5 ** 5
console.log(num)
num = 10 % 2 //modulo/modulus
console.log(num)

console.log("||||||||||||||String EXPRESSIONS|||||||||||||||||||")
// string expressions

let myString:string
let first:string = "five"
let second:string = "cheese"

// concatenation
myString = "five" + "cheese"
console.log(myString)
// interpolation
myString = `${first}${second}`
console.log(myString)

console.log("||||||||||||||Boolean EXPRESSIONS|||||||||||||||||||")
// Boolean expressions
let myBoolean1

myBoolean1 = 5 > 6
console.log(myBoolean1)

myBoolean1 = 5 < 6
console.log(myBoolean1)

myBoolean1 = 5 >= 6
console.log(myBoolean1)

myBoolean1 = 5 <= 6
console.log(myBoolean1)

myBoolean1 = 5 === 5
console.log(myBoolean1)

myBoolean1 = 5 === 5 || 6 === 6
console.log(myBoolean1)