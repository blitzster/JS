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