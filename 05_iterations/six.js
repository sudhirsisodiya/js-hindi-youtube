// const coding =["js","python","ruby","cpp","java"]

// const values =coding.forEach((value)=>{
//     // console.log(value);
//    return value; 
// })

// console.log(values);

const myNums =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNums.filter((num)=> num > 4);
// console.log(newNum);

// const newNums = myNums.filter((num)=>{
//     return num > 4;
// })
// console.log(newNums);

const newNums =[]
myNums.forEach((num)=>{
    if(num>4)
        newNums.push(num)
})

// console.log(newNums);

const books = [
    {
        title: 'Book 1',
        genre: 'Fiction', 
        publish: 1981,
        edition: 2004
    },
    { 
        title: 'Book 2', 
        genre: 'Non-Fiction', 
        publish:1992 ,
        edition: 2008
    },
    { 
        title: 'Book 3', 
        genre: 'History', 
        publish: 1999,
        edition: 2007
    },
    { 
        title: 'Book 4', 
        genre: 'Non-Fiction', 
        publish: 1989,
        edition: 2010
    },
    { 
        title: 'Book 5', 
        genre: 'Science', 
        publish: 2009,
        edition: 2014
    },
    { 
        title: 'Book 6', 
        genre: 'Fiction', 
        publish: 1987,
        edition: 2010
    },
    { 
        title: 'Book 7', 
        genre: 'History', 
        publish: 1986,
        edition: 1996
    },
    { 
        title: 'Book 8', 
        genre: 'Science', 
        publish: 2011,
        edition: 2016
    },
    { 
        title: 'Book 9', 
        genre: 'Non-Fiction', 
        publish: 1981,
        edition: 1989
    },
];

// const userBooks = books.filter((bk) => bk.genre==='History')
// console.log(userBooks);

const userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre==="History"
})
console.log(userBooks);