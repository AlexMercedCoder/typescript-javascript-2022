interface Person {
    name: String,
    age: Number,
    email?: String,
    greeting: () => String,
    spouse?: Person
}

// const Alex: Person = {
//     name: "Alex Merced",
//     age: 36,
//     greeting: function(){ return `Hi, I am ${this.name}`},
// }

// const Becky: Person = {
//     name: "Becky",
//     age: 34,
//     greeting: () => "Hiya"
// }

// Alex.spouse = Becky

// console.log(Alex)
// console.log(Alex.name)
// console.log(Alex["age"])

// Alex.email = "alex@alexmercedcoder.com"

// Becky.greeting = Alex.greeting

// console.log(Alex.greeting())
// console.log(Becky.greeting())

function makePeople(name: String, age: Number, greeting: String): Person {
    return {
        name,
        age,
        greeting: () => greeting
    }
}

const Alex: Person = makePeople("Alex", 36, "Hello")
const Becky: Person = makePeople("Becky", 34, "Hiya")

console.log(Alex, Becky)