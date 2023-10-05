// Write your code here

function validPassword(string) {
  let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
  const valid = string.search(regex);
  console.log(valid)
  return valid ? "Invalid" : "Valid";
}
console.log(validPassword("Mysqwd4!"));