let integers = [1, 2, 3, 4, 5];

let sum = 0;
let product = 1;

for (let i = 0; i < integers.length; i++) {
  sum += integers[i];
  product *= integers[i];
}

console.log("Sum:", sum);
console.log("Product:", product);
