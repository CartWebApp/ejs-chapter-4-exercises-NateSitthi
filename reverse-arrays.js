function reverseArray(arr) {
  let list = [];
 for (let i = 0; i < arr.length; i++) {
  let x = list[i];
  list.unshift(x);
 }
 return list;
}

function reverseArrayInPlace(arr) {
  // Add code.
}






// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]