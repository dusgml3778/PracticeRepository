let boxEl = document.querySelector('.box')

console.log(boxEl)

boxEl.classList.add('active')
let isContains = boxEl.classList.contains('active')
console.log(isContains)

console.log(boxEl)

// Handler
boxEl.addEventListener('click', function () {

  prompt('メッセージ', '内容')

})

