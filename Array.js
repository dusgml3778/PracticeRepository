const fruits = ['Apple','Banana']

const a = fruits.forEach(function(fruit,index){

  console.log(`${fruit}-${index}`)

})
console.log(a)

const b = fruits.map(function(fruit,index){
  return `${fruit}-${index}`
})

console.log(b)


const c = fruits.map(function(fruit,index){
  return {

    id:index,
    name:fruit
  }
})

console.log(c)