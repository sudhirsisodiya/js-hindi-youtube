// for of

// ['','' ,'']
// [{},{},{}]

const arr =[1, 2 , 3 , 4 , 5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting ="Hello World"

for (const greet of greeting) {
    // console.log(`Each char is : ${greet}`);
    
}


//  Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United state America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key ,':-', value);
    
}

const myObject={
    'game1':"NFS",
    'game2':"FREEFIRE",
    'game3':"BGMI"
}

// for (const [key,value] of myObject) {  // forof not recomended for objects 
//     console.log(key ,':-',value);
    
// }

for (const key in myObject) {
    if (Object.prototype.hasOwnProperty.call(myObject, key)) {
        const element = myObject[key];
        console.log(element);
        
    }
}