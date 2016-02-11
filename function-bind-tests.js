// Write your tests here!
// Here is an example.
Tinytest.add('Test Function.prototype.bind', function (test) {
  let func = function (boundArg) {return boundArg;};
  let arg = 'test';
  test.equal(func.bind(null, arg)(), arg);
});
