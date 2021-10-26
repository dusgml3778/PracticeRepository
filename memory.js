// import _ from 'lodash'
import getType from './getType'
// import {
//   random,
//   user
// } from './getRandom'

import * as R from './getRandom'

// // Shallow copy,Deep copy
// const user = {

//   name: 'Heropy',
//   age: 85,
//   emails: ['dusgml3779@gmail.com']

// }

// // const copyUser = Object.assign({},user);
// const copyUser = _.cloneDeep(user)

// console.log(copyUser === user)

// user.age = 22
// user.emails.push('baeruni1122@gmail.com')

// console.log(user)
// console.log(copyUser)

// console.log(user.emails === copyUser.emails)

const str = getType('aaaa')

console.log(str);
console.log(R.random())
