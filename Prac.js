function User(first, last) {

  this.firstName = first;
  this.lastName = last;
}

User.prototype.getFullName = function () {

  return `${this.firstName} ${this.lastName}`
}



const user01 = new User('a', 'b')
const user02 = new User('c', 'd')

console.log(user01.getFullName());