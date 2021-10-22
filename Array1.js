const numbers = [1, 2, 3, 4, 5]

const fruit = ['a', 'c','d']

//配列の後ろにデータ追加
numbers.push(6)

console.log(numbers)

//配列の前にデータ追加
numbers.unshift(0)

console.log(numbers)

// 値を逆にする
numbers.reverse()

console.log(numbers)

// (index,削除item数,新しいitem) 
numbers.splice(2, 1, 999)

console.log(numbers)

fruit.splice(1, 0, 'b')

console.log(fruit)