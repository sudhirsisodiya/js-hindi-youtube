// console.log("s");
// console.log("u");
// console.log("d");
// console.log("h");
// console.log("i");
// console.log("r");

// function sayMyName(){
//     console.log("s");
//     console.log("u");
//     console.log("d");
//     console.log("h");
//     console.log("i");
//     console.log("r");

// }

// sayMyName();

function addTwoNumber(number1,number2){
    return number1+number2
}

// console.log(addTwoNumber(5,3))

function userLoggin(username){
    if(!username){
        console.log("Please enter user name");
        return
    }
    return `${username} just logged in`;
}
console.log(userLoggin());
