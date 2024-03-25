const user = {
    username: 'Akshay',
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`);  //This is used for current context
        console.log(this); // will give the context of the value
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// function chai(){
//     let username = "Akshay"
//     console.log(this.username);
// }
// chai()


// const chai = function(){
//     let username = "Akshay";
//     console.log(this.username);
// }


//ARROW FUNCTION
// const chai = () => {
//     let username = "Akshay"
//     console.log(this.username);
// }
// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3 , 6));  //9

//Implicit Return
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3, 3));  //6

//NOTE :- If we use curly braces we have to use the return keyword
// If we use the () braces then no need to use the return. -> this is mainly used in React 


//Returning objects

const addTwoNumbers = (num1, num2) => ({username: "Akshay"})  //{ username: 'Akshay' }
console.log(addTwoNumbers(6, 6));
