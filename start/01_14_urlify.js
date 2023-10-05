// Write your code here
function URLFrendly(string) {
  return string.trim().replace(/[^0-9a-z ]/gi, '').replace(/[ ]/gi, '-').toLowerCase();
}
console.log(URLFrendly(" My blog name!"));
console.log(URLFrendly("Emma's blog"));