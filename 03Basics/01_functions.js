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

// console.log(loggedIn());

//OR
function loggedIn(username){
    if (!username){
        // console.log("Please enter a user name");   //Please enter a user name
                                                   //undefined
        return 
    }
    return `${username} just Logged In`
}



//====================================================================================

function calculateCartprice(...num1){            //...is also know as rest and spread operator
    return num1;
}
// console.log(calculateCartprice(200, 300, 400)); //[ 200, 300, 400 ]




const user = {
    username: "Akshay",
    price: 199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and the price is ${anyobject.price}`);
}
// handleObject(user)  //user name is Akshay and the price is 199
handleObject({
    username: "sam",
    price: 399  //user name is sam and the price is 399
})


const myNewArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[2];
}

// console.log(returnSecondValue(myNewArray));  //400
console.log(returnSecondValue([200, 300, 400, 500]));  //400





