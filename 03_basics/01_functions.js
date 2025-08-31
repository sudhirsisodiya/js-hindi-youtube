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
// console.log(userLoggin());

function calculateCarPrice(...num1){
    return num1;
}

// console.log(calculateCarPrice(200,400,600,2000));

const user={
    username:"sudhir",
    price:2000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

handleObject(
    {
        username:"hitesh",
        price:5000
    }
)

const myArray=[200,400,600]

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myArray));

console.log(returnSecondValue([200,500,300]));
