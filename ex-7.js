function isPalindrome(string) {
  const cleanedString = string.replace(/\s+/g, '').toLowerCase();
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false