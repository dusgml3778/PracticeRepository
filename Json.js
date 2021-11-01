
// import myData from './myData.json'

// //import문을 적을 때 Js파일이면 확장자 생략가능한데 그 외에는 적어줘야함

// console.log(myData)

const user = {

  name: 'min',
  age: 85,
  emails: [

    'dusgml3778@gmail.com'

  ]

}

// console.log('user',user)

// const str = JSON.stringify(user)
// console.log(str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj',obj)

//localStorage.setItem('user',JSON.stringify(user))

// 하나의 문자 데이터로 해석하기 위해

//console.log(localStorage.getItem('user'))

//localstrage의 저장되 있는 Json 데이터를 Js의 객체 데이터로 변환
//console.log(JSON.parse(localStorage.getItem('user')))

// localStorage.removeItem('user')

// 값수정
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age=22
console.log(obj)

localStorage.setItem('user',JSON.stringify(obj))
// obj 그대로 지정하지 않기 왜냐하면 Js 객체이기 때문에 Json 문자열로 바꿔줘야함


