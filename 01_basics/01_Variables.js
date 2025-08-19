const accountId='12344';
let emailName="sudhir123@gmail.com";
var password="sudhir@25";
let accountState;
cityName="jaipur";

/* Prefer not to use var
    because of issue in block scope and functional scope */
console.log(accountId);
console.table([accountId,emailName,password,accountState,cityName]);