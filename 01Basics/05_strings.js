name = "Akshay"
repo = 10
console.log(`Hi my name is ${name} and my repo count is ${repo}`);

const gameName = new String('Akshay-ak-com')
// console.log(gameName[0]);

// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));

console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4) // gives the substring
console.log(newString);

const anotherString = gameName.slice(-8, 4) // same as substring but we can use -ve values, so here it prints in reverse
console.log(anotherString);

const newStringOne = "   Akshay    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://akshay.com/akshay%10s"
console.log(url.replace("%", "-"))

console.log(url.includes("akshay"))

console.log(gameName.split("-"));