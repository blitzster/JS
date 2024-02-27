let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 24)
let myCreatedDate = new Date(2023, 0, 24, 5, 3)
// console.log(myCreatedDate.toLocaleString());


let myTime = Date.now()
// console.log(myTime);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getMinutes());

newDate.toLocaleString('default', {
    weekday:"long" //to display the full day instead of 3 letters
})