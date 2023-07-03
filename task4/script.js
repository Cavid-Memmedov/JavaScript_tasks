let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let count = {};
let maxCount = 0;
let mostFrequentItem;

for (let i = 0; i < arr1.length; i++) {
  let currentItem = arr1[i];
  count[currentItem] = (count[currentItem] || 0) + 1;

  if (count[currentItem] > maxCount) {
    maxCount = count[currentItem];
    mostFrequentItem = currentItem;
  }
}

let result = mostFrequentItem + " (" + maxCount + " times)";
console.log(result);
