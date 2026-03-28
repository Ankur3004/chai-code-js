const accountId = 144553
let accountEmail = "ankur.raj.vns@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 not allowed

accountEmail =  "abc@gamil.com"
accountPassword = "2121"
accountCity = "Varanasi"

console.log(accountId)

/*
Prefer no to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountCity, accountPassword, accountState])