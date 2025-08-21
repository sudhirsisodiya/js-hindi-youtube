// Types of data type

// Primitive => these are 7 types 
// String , Number , Boolean, null , undefined , symbol , bigInt .

const value =33;          // number 
const str1="sudhir";       // string
const isLoggedIn = true;     // boolean
const salary =null;           // null
let Email;                  // undefined

const id=Symbol('123');
const anotherId=Symbol('123');
// console.log(id==anotherId);

const bigValue=193823048230734n;
// console.log(typeof bigValue);

// Reference /Non-Premitive
// Array , Object , Functions

const studentName=["Raj","jack","scott","tiger"]
// console.log(studentName);
// console.log(typeof studentName);


let car={
    carName:"Defender",
    companyName:"Land Rover",
    minPrice:15000000,
    maxPrice:28000000

}
// console.log(car);
// console.log(typeof car);

const myFunction=function(){
    console.log("hello world");
}

 myFunction();
 console.log(typeof myFunction);