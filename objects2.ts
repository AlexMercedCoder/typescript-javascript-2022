interface StudentInterface {
    name: String,
    age: Number,
    height?: String,
    greeting: () => String
}

class Student {

    name: String
    age: Number
    height?: String

    constructor(name: String, age: Number){
        this.name = name
        this.age = age
    }

    greeting(){
        return "Hello"
    }
}

// const Tim: StudentInterface  = {
//     name: "Tim",
//     age: 14,
//     greeting: () => "Hello"
// }

// console.log(Tim)
// console.log(Tim.name)
// console.log(Tim["age"])

// Tim.height = "5ft 6in"

function makeStudent(name: String, age: Number): StudentInterface {

    return {
        name,
        age,
        greeting: () => "Hello"
    }

}

const ListOfStudents: Array<StudentInterface> = [
    makeStudent("Tim", 14),
    makeStudent("Jimmy",14),
    makeStudent("Susie", 15)
]

const ListOfStudents2: Array<Student> = [
    new Student("Tim", 14),
    new Student("Jimmy",14),
    new Student("Susie", 15)
]

console.log(ListOfStudents)
console.log(ListOfStudents2)