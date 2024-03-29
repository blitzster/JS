//Array

//JS arrays are resizable and can contain mix of different data types
const myArr = [0, 1, 2, 3, 4,5]
//const myArr = [0, 1, 2, 3, 4, "akshay", true]
// console.log(myArr[0]);

//Another way of displaying an array
const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr2[0]);

//Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)  //9, 0, 1, 2,
//                   //3, 4, 5

// myArr.shift()  //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);


// const newArr = myArr.join()
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof newArr); //string


//slice splice
console.log("A", myArr); //A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1); //[ 1, 2 ]

console.log("B", myArr); //B [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C", myArr); //C [ 0, 4, 5 ]
console.log(myn2); //[ 1, 2, 3 ]