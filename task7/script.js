let arr = [2, 5, 9, 6];
let elementToRemove = 5;

let index = arr.indexOf(elementToRemove);
if (index !== -1) {
  arr.splice(index, 1);
}

console.log(arr);
