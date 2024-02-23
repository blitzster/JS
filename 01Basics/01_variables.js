const accountId = 12345;
let accountEmail = "akshay@gmail.com";
var accountPassword = "1234";
accountCity = "Bangalore";
let accountState;


accountEmail = "noname@gmail.com";
accountPassword = "112233"
accountCity = "Bengaluru"

/*
prefer not to use var because of the issue of block scope and 
functional scope
*/

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])