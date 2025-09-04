//  Immedeatly invoked function Expressions (IIFE)

(function chai(){
    // NAMED IIFE
    console.log(`DB CONNECTED`);
    
})();


// UNNAMED IIFE;
(
    (NAME)=>{
        console.log(`DB CONNECTED TWO ${NAME}`);
        
    }
)('SUDHIR')