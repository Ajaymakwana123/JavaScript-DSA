let ans = Number(prompt("what is Your Age"));

//isNan is method for check is a number
// if you use Nan==Nan its retur a false
if (isNaN(ans)) {
  console.log("Not a Valid Input");
} else if (ans >= 18) {
  console.log("You Can Vote");
} else {
  console.log("you cant vote");
}

//nester ternary operatior
let a = 0;
console.log(a > 0 ? "positive" : a < 0 ? "negative" : "zero");
