const score=400;
// console.log(score);

const balance=new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));                // toFixed is used to fixe the value in desimal form.

const otherNumber=123.8763;
// console.log(otherNumber.toPrecision(4));            // It is used to Pre size of the value.

const Rupees=1000000;
// console.log(Rupees.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++++++++++++++++ MATHs  ++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-100));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));        // Always show the Top value (+1)
// console.log(Math.floor(4.6));       // Always show the floor value.(integer value only)


// console.log(Math.sqrt(25));
// console.log(Math.pow(5,2));
// console.log(Math.min(10,15,20,25,8));
// console.log(Math.max(14,24,42,64,76,90));

// console.log(Math.random());     // it is always between 0  and 1;
// console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()* (max-min+1)+10)) ;