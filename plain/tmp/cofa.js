// Generated by CoffeeScript 1.8.0
(function() {
  var a, changeNumbers, outer;

  outer = 1;

  changeNumbers = function(a) {
    var inner;
    a = a || -1;
    outer = 10;
    console.log('here: ', outer);
    return inner = a;
  };

  a = changeNumbers(8, 9);

  console.log("a is " + a);

  console.log(outer);

}).call(this);
