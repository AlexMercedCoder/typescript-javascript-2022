class Student {

    constructor(name, age){
        this.name = name
        this.age = age
    }

    greeting(){
        return "Hello"
    }
}

class MathStudent extends Student {

    constructor(name, age, topic){
        super(name, age)
        this.topic = topic
    }

    getMathTextBooks(){
        console.log("I got my math textbooks")
    }
}

const Tim = new MathStudent("Tim", 14, "Pre-Algebra")

console.log(Tim)
Tim.getMathTextBooks()