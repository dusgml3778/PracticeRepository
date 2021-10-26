// const userAge = {

//   name: 'Heropy',
//   age: 85

// }

// const userEmail = {

//   name: 'Heropy',
//   email: 'dusgml3779@gmail.com'

// }

// // const target0 = Object.assign(userAge, userEmail)

// // console.log(target0)
// // console.log(userAge)
// // console.log(target0 === userAge)

// const target1 = Object.assign({},userAge, userEmail)

// console.log(target1)
// console.log(userAge)
// console.log(target1 === userAge)

// // const a = {
// //   k: 123
// // }
// // const b = {
// //   k: 123
// // }
// // console.log(a === b)

const user = {
  name: 'kim',
  age: 75,
  email: 'dusgml3779@gmail.com'

}

//配列で返却,何を?ObjectのProperty
// const keys = Object.keys(user)

// console.log(keys)

// console.log(user['email'])

// const val = keys.map(key => user[key])
// console.log(val)

const copyUser = Object.assign({}, user)

console.log(copyUser === user)
console.log(copyUser.name)
console.log(copyUser.age)
console.log(copyUser.email)