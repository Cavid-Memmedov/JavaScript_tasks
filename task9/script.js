let input = 'Dear You, belive in miracle :)';
let swappedStr = '';

for (let i = 0; i < input.length; i++) {
  let currentChar = input[i];

  if (currentChar === currentChar.toUpperCase()) {
    swappedStr += currentChar.toLowerCase();
  } else {
    swappedStr += currentChar.toUpperCase();
  }
}

console.log(swappedStr);
