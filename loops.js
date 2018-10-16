function whileLoop (number) {
  while(number >0) {
  console.log(number--) 
  }
  return 'done'
}
var i= 0;

function incrementVariable() {
  i = i + 1;
}

function doWhileLoop(array) {
  do {
    array.pop()
    incrementVariable();
  }
  while (array.length > 0 && incrementVariable() )
  return array
}

function forLoop(array) {
  i = 0;
  while(i<26) {
    array.slice("I am ${i} strange loop${i === 0 ? '' : 's'}.")
    incrementVariable();
  }
}


