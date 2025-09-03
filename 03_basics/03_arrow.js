const User={
    username:"sudhir",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        //  console.log(this);
        
    }
}

// User.welcomeMessage()
// User.username="Rajput"
// User.welcomeMessage()

//  console.log(this.User);

// function chai(){
//     let username="sam"
//     console.log(this.username);
    
// }

// chai()

const chai= () =>{
     let username="sam"
    console.log(this);
}

// chai()


// Arrow function
// syntax : ()=>{}

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }

// const addTwo=(num1,num2)=>num1+num2

// const addTwo=(num1,num2)=>(num1+num2)

// const addTwo=(num1,num2)=({username:"hitesh"})

// console.log(addTwo(5,7));

const myArray=[1,4,7,3,9]

myArray.forEach(()=>{})
