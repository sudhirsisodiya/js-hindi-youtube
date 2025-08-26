//Arrays

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"];

// console.log(marvel_heros);
// console.log(dc_heros);

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

// const allHeros= marvel_heros.concat(dc_heros);
// console.log(allHeros);

// const allNewHeros=[...marvel_heros,...dc_heros]  // Spred 
// console.log(allNewHeros);

const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_arr= another_Array.flat(Infinity);
// console.log(real_another_arr);

console.log(Array.isArray("Sudhir"));
console.log(Array.from("sudhir"));
console.log(Array.from({name:"sudhir"}));       // Imp , intersting

const scor1=100;
const scor2=200;
const scor3=300;
console.log(Array.of(scor1,scor2,scor3));


