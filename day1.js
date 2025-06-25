let a = 20;
let b = 10;
console.log(a + b + " is answer is 30");
console.log(" is answer is 30" + (a + b));
// priority bracket ne aapvama aave che

console.log("1" - 1);
// aama js substrack j karshe because "-" nu ek j kam che etl js string ne integer ma convert krine result print krshe :: aane ` type coercion ` kevay. " * / " ma same j work krashe

//example of swaps total 3 method

// 1 with new variable

let c;
c = a; //c = 20
a = b; // a = 10
b = c; // b = 20

// 2 without new variable
a = a + b; //a = 30
b = a - b; //b = 20
a = a - b; //a = 10

//3 destructring

[a, b] = [b, a];

let aa = 7;
let bb = 2;
console.log(b % a);

// left side mtlb "b" ne dividend kevay
// right side mtlb "a" ne division kevay
// if dividend nani che division thi to calculate nahi thay and dividend j return krshe

//last digit joto hoy adhva last na 2 digit jota hoy integer mathi :

let ss = 3756;
console.log(ss % 10);
//ans : 6

console.log(ss % 100);
//ans : 56

// question:: jyare mare last na digit sivay ni value jove tyre :
console.log(Math.floor(ss / 10));
//ans : 375

console.log(Math.round(10.3)); // .5 thi niche ni value 10 and 5 or 5 thi vadhu 11 thay
console.log(Math.ceil(10.1)); // koy pn point value aave ene agal vadhri dey ans: 11
console.log(Math.trunc(19.55)); // just remove dot pachi ni value
console.log(Math.pow(2, 5)); //2^5 ans: 32 2ne 5 var 2 jode gunakar like: 2*2*2*2*2
console.log(Math.sqrt(16)); //square root aape ans: 4
console.log(Math.abs(-13)); // convert negative to positive ans: 13
console.log(Math.max(12,43,88,76)); // give me big value ans: 88
console.log(Math.max(43,12,76,88)); // give me small value ans: 12
console.log(Math.random()); // 0 to 1 ni random value lavi dey
console.log(ss.toFixed(2)); // mtbl point pachi 2 value aavse




 
