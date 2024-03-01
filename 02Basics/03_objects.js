//singleton
// object.create



const mySym = Symbol("key1")
//object literals
const JsUser = {
    name: "Akshay",
    age: 20,
    // mySym: "key1",  //key1
    [mySym]: "key1",  //this is how we take symbols
    location: "Bangalore",
    email: "akshay@google.com",
    isLoggedIn: false,
    loginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.name);  //Akshay
// console.log(JsUser["name"]);  //Akshay

// console.log(typeof JsUser["mySym"]);  //key1  //string

// console.log(JsUser[mySym]); //key1

JsUser.email = "Akshay@outlook.com"  
// Object.freeze(JsUser)
JsUser.email = "Akshay@microsoft.com"
// console.log(JsUser);  //  email: 'Akshay@outlook.com'
// After applying the freeze method to the object any changes made to that object won't be applyed.
//  [Symbol(key1)]: 'key1'



JsUser.greeting = function(){
    console.log("Hello");
}

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`);
}
console.log(JsUser.greetingTwo());  //Hello Akshay

// console.log(JsUser.greeting);  //[Function (anonymous)]

console.log(JsUser.greeting());  //Hello