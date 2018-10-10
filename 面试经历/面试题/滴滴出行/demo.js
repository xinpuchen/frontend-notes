{
  function test() {
    var a = 1, b = 2;
    setTimeout(function () { console.log(a); a = 3 }, 1000);
    a = 2;
    setTimeout(function () { console.log(a); a = 4 }, 3000);
  }
  console.log(test());
}
{
  var arr = [1, 2, 3];
  arr[0] = 'a';
  arr[1] = 'b';
  arr['foo'] = 'c';
  console.log(arr.length);
  console.log(typeof (1 / 0));
  console.log(null instanceof Object, typeof null);
}
{
  var lowerCase = /^[a-z]+$/
  console.log(lowerCase.test(null), lowerCase.test());
}
{
  var s = (function () {
    return typeof arguments;
  })()
  console.log(s);
}
{
  var x = 3;
  var foo = {
    x: 2,
    baz: {
      x: 1,
      bar: function () {
        return this.x
      }
    }
  }
  var go = foo.baz.bar;
  console.log(go());
  console.log(foo.baz.bar());
}
{
  (function () {
    var a = b = 3;
  })
  console.log(typeof a);
  console.log(typeof b);
}
{
  function Person(name) {
    this.name = name
  }
  Person.prototype.name = 'default';
  Person.prototype.getName = function () {
    return this.name
  }
  var li = new Person();
  for (var prop in li) {
    console.log(prop)
  }
}
{
  var a = [0, 1, 2], b = '0,1,2'.split(',');
  console.log(a == b)
  console.log(a === b)
  console.log(a)
  console.log(b)
}
{
  console.log(00000101^00000101) //异或
}