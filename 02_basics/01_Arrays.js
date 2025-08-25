// Array= Collection of multiple data.

let myArr=[1,2,3,4,5];
let myHeroes=["Bhagatsingh","Sukhdev","rajguru"];
// console.log(myArr[0]);
// console.log(myHeroes);

let newArr=new Array(1,2,3,4,5,6);
// console.log(newArr[3]);

// Array Methods----->

// newArr.push(5);
// console.log(newArr);
// newArr.push(6);
// console.log(newArr);
// newArr.pop(6);


// newArr.unshift(9);
// newArr.shift();
// console.log(newArr);

// console.log(newArr.includes(4));
// console.log(newArr.indexOf(4));

// console.log(newArr.includes(9));
// console.log(newArr.indexOf(9));

// const newArr1=newArr.join();
// console.log(newArr);
// console.log(typeof newArr);
// console.log(typeof newArr1);

// slice, splice Method.

console.log("A ", newArr);

const myn1= newArr.slice(1, 3);
console.log(myn1);
console.log("B" ,newArr);

const myn2= newArr.splice(1, 3);
console.log("C" ,newArr);

console.log(myn2);