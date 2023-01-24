const accountId = 144553
let accountEmail = "panchal.jaimin@gmail.com"
var accountPassword = "123456"
accountCity = "Vadodara"
let accountState;

// accountId = 2
console.log(accountId);
/*
Prefer not to use var because because of issue in block scope and functional scope
 */

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Ahmedabad"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])