
let a = 200


if(true){
    let a = 10;
    const b = 20;

    console.log('INNER',a);  //INNER 10
    var c = 30;
}

// console.log(a);  //ReferenceError: a is not defined
// console.log(b);   //ReferenceError: b is not defined
// console.log(c);  //30 this is the main reason we dont use var. even if it is in local scope and global scope we get the same values



console.log(a);  //200


