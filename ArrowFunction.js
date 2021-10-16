
/////////////////// Arrow Function //////////////////

// const doubleArrow = x => x*2;

// console.log('doubleArrow',doubleArrow(7));

//const c = 7;

// function double(){

//   console.log(c*2);

// }

// double();

/////////////////// IIFE Immediately-Invoked Function Expression //////////////////

// (function(){
//   console.log(c*2);
// })()

/////////////////// Hoisting ///////////////////
// 一般的にジャバスクリプトは上から下にコートを解釈する
// 関数の宣言の所が一番の上から呼ばれて関数を宣言する前に
// 関数を呼んでも実行出来る

// const c = 7;

// double();

// function double(){
//   console.log(c*2);
// }

/////////////////タイマー関数///////////////////

// const timer = setTimeout(function(){
// console.log('Heropy')
// },3000);

// const h1El = document.querySelector('h1');

// h1El.addEventListener('click',function (){

//   clearTimeout(timer);

// })

/////////////////Callback///////////////////
// ex) setTimeout

function timeout(callback){
  setTimeout(() =>{
    console.log('Heropy!');
    callback();
  },3000)
}
timeout(()=>{
  console.log('Done');
});




