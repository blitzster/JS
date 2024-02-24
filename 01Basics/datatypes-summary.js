//primitive datatypes (value type)

//7 types - Number, String, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.6
const isLoggedIn = true

const outsideTemp = null
let userEmail;
const id = Symbol('123')
const bigNumber = 24536567892453n

//Non-primitive datatypes (Reference type)

//Array, Object, Functions


//Reference no primitive datatype
const heros = ["Ironman", "Spiderman", "deadpool"]

let myObj = {
    name: "Akshay",
    age: 21

}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction) // this will return function where it is the type of object function



//+++++++++++++++++++++++++++++++++++++++++++++++

//stack(Primitive) and heap(non-primitive)

// Stack
//In stack it does not change the values cause if only modifes the copy of the variable and the original variable will still be in the stack
//so when we call the variable the original variable from the stack will be printed which will be different to the other variable
let myYoutubeName = "Blitzster"

let anotherName = myYoutubeName
anotherName = "Akshay"

console.log(myYoutubeName)
console.log(anotherName);


//HEAP
//When we change the data in heap all the elements will be affected as they are referenced to the same heap memory from stack
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "akshay@gmail.com"

console.log(userOne);
console.log(userTwo);