function myName(){
    console.log('A');
    console.log('K');
    console.log('S');
    console.log('H');
    console.log('A');
    console.log('Y');
}
// myName()



function addNumbers(a, b){
    return a + b
}
// console.log(addNumbers(3, 5));


// function loggedIn(username){
//     return `${username} just logged in`; //Akshay just logged in
// }

// console.log(loggedIn("Akshay"));

// console.log(loggedIn());  //undefined just logged in


function loggedIn(username){
    if (username === undefined){
        console.log("Please enter a user name");   //Please enter a user name
                                                   //undefined
        return 
    }
    return `${username} just Logged In`
}

console.log(loggedIn());

//OR
function loggedIn(username){
    if (!username){
        console.log("Please enter a user name");   //Please enter a user name
                                                   //undefined
        return 
    }
    return `${username} just Logged In`
}
