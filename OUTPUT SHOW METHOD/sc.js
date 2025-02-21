function outer() {
  let value = 5;
  return function inner() {
    console.log(value +1 );
    
  };
}
const data = outer();

data();
