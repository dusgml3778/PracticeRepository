//一致
const result = 'Hello world'.indexOf('world')
console.log(result)
//不一致
const result1 = 'Hello world'.indexOf('heropy')
console.log(result1)

const str = '0123'
console.log(str.indexOf('1')!==-1)
console.log(str.slice(0,2))
console.log(str.replace('1','3'))

const str1 = 'dusgml3779@gmail.com'
console.log(str1.match(/.+(?=@)/)[0])

const str2 = '   abc'
console.log(str2.trim())
