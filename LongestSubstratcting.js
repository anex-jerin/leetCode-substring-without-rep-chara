let s = 'pwdsddddffggfdf';

let start = 0;
let maxLength = 0;
for (let i = 0; i < s.length; i++) {
  for (let j = start; j < i; j++) {
    if (s[i] === s[j]) {
      start = j + 1;
      break;
    }
  }
  if (i - start + 1 > maxLength) {
    maxLength = i - start + 1;
  }
}
return maxLength;
