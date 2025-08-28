// singleton ==> if any object created by constructor then create only one object.
// Object.creat

// object literals

const mySym=Symbol("key1");
const JsUser={
    name:"Sudhir",
    "full name":"sudhir sisodiya",
    email:"sudhir123@google.com",
    age:20,
    location:"khargone",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],
    [mySym]:"mykey1"
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser."fullname");

// console.log(JsUser["full name"]);

//  console.log(JsUser[mySym]);
//  console.log(typeof JsUser[mySym]);

// JsUser.email="sudhir@google.com"
// Object.freeze(JsUser)
// JsUser.email="sudhir@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User")
}
//console.log(JsUser.greeting);
// console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User,${this.name}`)
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
