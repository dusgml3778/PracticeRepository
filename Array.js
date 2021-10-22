const fruits = ['Apple', 'Banana']

const a = fruits.forEach(function (fruit, index) {

  console.log(`${fruit}-${index}`)

})
console.log(a)

const b = fruits.map(function (fruit, index) {
  return `${fruit}-${index}`
})

console.log(b)

const c = fruits.map(function (fruit, index) {
  return {

    id: index,
    name: fruit
  }
})

console.log(c)

const numbers = [1, 2, 3, 4]

// 返却して新しい配列として返却
const d = numbers.map(num => num < 3)

console.log(d)

// 条件に合うデータを探す
const e = numbers.filter(num => num < 3)

console.log(e)

// 文字を検索
const f = fruits.find(f =>

  /^B/.test(f)
)

console.log(f)

//Index 返却
const h = fruits.findIndex(f => {

  return /^B/.test(f)
})

console.log(h)
