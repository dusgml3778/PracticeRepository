
// ES6 Classes

// function User(first,last){
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`
// }


//改善

class User{

  constructor(first,last){
    this.firstName = first
    this.lastName = last
  }

  getFullName(){
    return `${this.firstName} ${this.lastName}`
  }

}

const heropy = new User('Heropy', 'Park')

console.log(heropy)
