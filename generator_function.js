function* generatorFunction() {
  console.log('Generator function is running!');

  let x = 5;
  yield x;

  x++;
  y = yield x;
  return y + x;
}

let interator = generatorFunction();

console.log(interator.next());
console.log(interator.next());
console.log(interator.next(4));

console.log('All done!');