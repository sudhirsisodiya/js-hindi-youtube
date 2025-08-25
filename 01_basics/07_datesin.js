// Dates

let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(mydate.getTimezoneOffset());
// console.log(typeof mydate);

// let myCreatDate=new Date(2023,0,25);
// console.log(myCreatDate);
// console.log(myCreatDate.toDateString());

// let myCreateDate=new Date(2023,0,25,5,3);
// let myCreateDate=new Date("2023-01-25");

// console.log(myCreateDate.toLocaleString());

let myCreatedDate=new Date("1-14-2025");
// console.log(myCreatedDate.toLocaleString());

 let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long" 
})