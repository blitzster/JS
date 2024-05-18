//Const and Let keywords

// let pi = 3.14159;
let radius;
let circumference;

//pi = 410; by doing this i can change the value of the variable without others noticing if we use Let. 

//const = a variable that cannot be changed
const pi = 3.14159; // now this value cannot be changed.


radius = window.prompt("Enter the radius");
radius = Number(radius);

circumference = 2 * pi * radius;

console.log(circumference);