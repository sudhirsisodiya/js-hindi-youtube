// if statements
const isUserLoggedIn=true;
const tempreture =50;

// if(tempreture ===50){
//     console.log("less than 50");
    
// }else{
//     console.log("greater than 50");
    
// }

// < , > , <= , >= ,  , ! , != , == ,=== , !==

const score = 200;

// if(score > 100){
//     var power="fly";
//     console.log(`user power ${power}`);
    
// }
// console.log(`user power ${power}`);

const balance=1000;
// if(balance > 500) console.log("test"), console.log("test2");  // it is valid but not recomended

// if(balance < 500){
//     console.log("less than 500");
    
// }else if(balance < 900){
//     console.log("less than 750");
    
// }else{
//     console.log("less than 1200");
    
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("user logged in");
    
}