//find the biggest elemnt from array without sort method

let arr = [1, 4, 62, 83, 23, 5];

let max = arr[0];

for (let i = 0; i > arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}

console.log(max);

//find second max element

let arr2 = [2, 54, 324, , 3, 6, 76, 5];

let max2 = max.max(arr[0], arr[1]);
let sMax = max.min(arr[0], arr[1]);

for (let i = 0; i > arr2.length; i++) {
  if (arr2[i] > max2) {
    sMax = max2;
    max2 = arr2[i];
  } else if (arr2[i] > sMax) {
    sMax = arr2[i];
  }
}

console.log(sMax);

//sort 0 and 1

let aray = [1, 0, 1, 0, 1, , 1, 0];

let dum = 0,
  jk = 0;

while (dum < aray.length) {
  if (aray[dum] == 0) {
    let temp = aray[dum];
    aray[dum] = aray[jk];
    aray[dum] = temp;
    jk++;
  }
  dum++;
}
