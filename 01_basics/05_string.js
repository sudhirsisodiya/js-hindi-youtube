const name="sudhirsingh"
const repoCount=50

// console.log(name+repoCount+"value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName=new String('sudhir-sr-com');
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt('3'));
// console.log(gameName.indexOf('d'));

const newString=gameName.substring(0,4);
// console.log(newString);

const anotherString=gameName.slice(-8,4)
// console.log(anotherString);

const newString1="   sudhir   "
// console.log(newString1.trim());

const url="sudhirsingh%20sisodiya"
// console.log(url.replace('%20','-'));

// console.log(gameName.split('-'));

let text="Go to Top";
let result=text.anchor('top');
// console.log(result);

let array=[10,20,30,40,50];
// console.log(array.at(0));
// console.log(array.at(1));
// console.log(array.at(-4));

// console.log(text.big());
// console.log(text.blink());
// console.log(text.bold());

//console.log(text.charCodeAt(0));

let emoji="❤️‍🩹"
// console.log(emoji.charCodeAt());
// console.log(emoji.codePointAt());


let firstname="sudhir"
let lastname="sisodiya"
// console.log(firstname.concat(" ",lastname," !"));

let word=String.fromCodePoint(72,101,108,108,111);
// console.log(word);
// console.log(String.fromCodePoint(65,66,67,68));

function greet(msg ,name){
    console.log(msg+","+name);

}
//  greet.apply(null,["Hello","Sudhir"]);

//  greet.call(null,"hello","sudhir");     // same as apply but argument form is different

let num=123;
let num1=num.toString();        // converts into string form , useful for numbers,array,booleans ,dates 
// console.log(num.toString());
// console.log(typeof num1);

let arr=[1,2,3];
// console.log(arr.toString());


// Get Arguments() :=> IN js it is a special type of object . it stores all arguments  thats given the object function
// these are array like object . can access to index and it has length , but its not a real array (so map ,forEach can't use directly).
function printAll(){
    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i]);
    }
}
// printAll("sudhir","singh","sisodiya",2025,true);

//caller() :=> In js each function has a caller property
            // it means which function was  called this function
            // if function called to directly global scope-> then null 

function first(){
    second();
}
function second(){
    console.log(second.caller);
}
// first();


// Object :=> It is used for convert the value into object.
let x=Object(123);
let y=Object("Hello");
let z=Object(true);

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(typeof[x,y,z]);

// assign() :=> It is a built-in static method that is copy the properties in one object to another object.
let object1={
    email:"abc"
}
let object2={
    url:"1@ybl",
    id:1,
}
Object.assign(object1,object2);
// console.log(object1);
