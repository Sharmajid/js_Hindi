// console.log("Anand");
const accountId = 144553;
let accountEmail = "yadav@gmail.com";
let accountPassword = "12345";
let accountCity = "Jaipur";
let accountstate;
// This line will throw an error because accountId is a constant
// accountId = 2;

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountstate]);
