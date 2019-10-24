function* helloWorld() {
  yield 'hello';
  yield 'world';
  return 'end';
}
helloWorld();

var hello = helloWorld();
console.log(hello.next());

function wrapper(generatorFunction) {
  return function() {
    const generatorObject = generatorFunction();
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = param =>
  wrapper(function*() {
    console.log(`First input: ${yield}`);
    return 'DONE';
  })().next(param);

wrapped('he!');
wrapped('hell!');
wrapped('hello!');

function* gen(x) {
  try {
    var y = yield x + 2;
  } catch (e) {
    console.log(e);
  }
  return y;
}
var g = gen(1);
g.next();
g.throw('error');
