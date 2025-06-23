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
