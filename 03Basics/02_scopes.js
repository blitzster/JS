
let a = 200


if(true){
    let a = 10;
    const b = 20;

    // console.log('INNER',a);  //INNER 10
    var c = 30;
}

// console.log(a);  //ReferenceError: a is not defined
// console.log(b);   //ReferenceError: b is not defined
// console.log(c);  //30 this is the main reason we dont use var. even if it is in local scope and global scope we get the same values

// console.log(a);  //200


function one(){
    const username = "Akshay";
    function two(){
        const website = "google.com"
        // console.log(username);
    }
    // console.log(website); // inner can access outer but the outer cannot access inner

    // two()  //Akshay

}
one()




if (true){
    const username = "Akshay"
    if(username === "Akshay"){
        const website = " google.com";
        // console.log(username + website);  // Akshay google.com
    }
    // console.log(website);  // error
}

// console.log(username);  // error



//=================================INTERESTING==============


addOne(4)  // this give no error
function addOne(num){
    return num + 1
}


//but
addTwo(5)  // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

//The above code gives error since we declared it and gave it a variable to store into it. This is called as hoisting

