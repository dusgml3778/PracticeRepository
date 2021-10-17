// const heropy = {

// firstName : 'Heropy',
// lastName : 'Park',
// getFullName : function(){

//   return `${this.firstName} ${this.lastName}`
// }
// }

// console.log(heropy.getFullName());
// console.log(heropy);

function user(first,last){

  this.firstName = first;
  this.lastName = last;
}

// prototype? インスタンスの数量に関わらずこの関数はメモリー上に一回作られる
user.prototype.getFullName = function (){
  return `${this.firstName} ${this.lastName}`
}

// Instance
const heropy0 = new user('heropy','park');
const heropy1 = new user('Neo','Smith');

console.log(heropy0.getFullName());
console.log(heropy1);
