
// Truthy 
// true {} [] 1 2 'false'...

// Falsy
// false '' null undefined 0 -0 NaN

function scope(){

  if(''){
    const a = 123;

    console.log(a); 
  }
}

scope();