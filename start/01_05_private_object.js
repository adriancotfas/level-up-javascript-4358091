// Write your code hereclass 

class User {
  #userName;
  #pasword;
  constructor(userName, pasword, age) {
    this.#userName = userName;
    this.#pasword = pasword;
    this.age = age;
  }
  getUser() {
    return  this.#user() ;
  }
  #user() {
    return `${this.#userName}, ${this.#pasword}, ${this.age}`;
  }
}

let user = new User('John', 'Xe983kj', 45);
console.log(user.userName, user.pasword, user.age, user.getUser());