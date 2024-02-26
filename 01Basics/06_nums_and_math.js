const score = 400
// console.log(score);


const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString()); // converting number to string

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // gives the decimal values after the point

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4)); // rounds off the value and prints it.

const hundreds = 1000000;
// console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000



//----------------------------------MATHS-------------------------------------

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.7)); //5
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(5, 3, 7, 1)); //1
// console.log(Math.max(5, 3, 7, 1)); //7

console.log(Math.random());
console.log((Math.random()*10) + 1);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // we get the values max -min and then add the min to make it double digits so we get the min values till max 
//values

//max - min + 1 this is to avoid 0 case senario