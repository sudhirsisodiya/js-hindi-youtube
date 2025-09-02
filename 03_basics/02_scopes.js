var c=300;

{
    if(true){
        let a=10;
        const b=20;
        
      // console.log("INNER:",a);

    }
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username="sudhir"

  function Two(){
    const website="youtube"
    console.log(username);
    
  }
  // console.log(website);
  Two()
}
one()

if(true){
  const username="sudhir"
  if(username=="sudhir"){
    const website=" linkdin "
    console.log(username + website);
    
  }
  // console.log(website);
  
}
// console.log(username);

// ++++++++++++++++++++++++++++++++ "Intersting" ++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5));                   
function addone(num){                           //// It is used both(after & before) decalaration
  return num+1
}


const addTwo=function(num){
  return num+2                                // It is not used before decalaration
}

 console.log(addTwo(5));              