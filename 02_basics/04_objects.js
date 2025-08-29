// Singletone and constructor objects

// const tinderUser=new Object()            // singleton object
    const tinderUser={}                     // non singleton object
    tinderUser.id=451335,
    tinderUser.name="Harry",
    tinderUser.isLoggedin=false

// console.log(tinderUser);

const regularUser={
    email:"sudhir@google.com",
    fullname:{
        userfullname:{
            firstname:"sudhir",
            middlename:"singh",
            lastname:"sisodiya"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.middlename);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a" , 2:"b"}
const obj2={3:"c" , 4:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
// const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {

        id:1,
        email:"sudhir@g.com"
    },
    {
        id:2,
        email:"raj@g.com"
    },{
        id:3,
        email:"john@g.com"
    },{
        id:4,
        email:"harry@g.com"
    }
]

users[0].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedin'));


// Destructuring of objects
const course={
    courseName:"Js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// console.log(course.courseInstructor);        // each time this formate used so , its not a good practice

// destructure
const{courseInstructor}=course
// console.log(courseInstructor);

const{courseInstructor:Instructor}=course
// console.log(Instructor);

// const navbar=({company})=>{

// }
// navbar(company="hitesh");
// console.log(company);

// {       // Json file = json file in the form of objects or array. it is used for api's

//     "name":"sudhir",
//     "id":"12345",
//     "isLoggedin":false,

// }

[
    {},
    {},
    {}
]