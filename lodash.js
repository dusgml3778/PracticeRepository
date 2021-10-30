import _ from 'lodash'
// import에 중괄호가 없으면 기본통로를 통해서 데이터가 나옴 _ 대신에 다른 거 써도 됨

const userA = [
  {
    userid: '1',
    name: 'Heropy'
  },
  {
    userid: '2',
    name: 'Neo'
  }
]

const userB = [
  {
    userid: '1',
    name: 'Heropy'
  },
  {
    userid: '3',
    name: 'Amy'
  }
]

const userC = userA.concat(userB)

console.log('concat', userC)
console.log('uniqBy', _.uniqBy(userC, 'userid'))
// 중복되는 값이 있는 객체,중복되는 값의 속성
// 배열 데이터가 하나 일 때 
const userD = _.unionBy(userA,userB,'userid')
// 배열 데이터가 여러 개 일때
console.log('userBy',userD)
// 결과는 같음

const users = [
{userId:'1',name:'A'},
{userId:'2',name:'B'},
{userId:'3',name:'C'},
{userId:'4',name:'D'},
{userId:'5',name:'E'}

]

const founder = _.find(users,{name:'A'})
console.log(founder)

const founderIndex = _.findIndex(users,{name:'D'})
console.log(founderIndex)

_.remove(users,{name:'B'})
console.log(users)