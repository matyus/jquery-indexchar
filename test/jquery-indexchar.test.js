$(function(){

  module('Functioning');

  test("that it returns index for a single uppercase character", function(){
    var index = $.indexChar('C');

    equal(index, 2, "should return 2");
  });

  test("that it returns index for a single lowercase character", function(){
    var index = $.indexChar('c');

    equal(index, 2, "should return 2");
  });

  test("that it returns index for a the first character from a string", function(){
    var index = $.indexChar('CAT');

    equal(index, 2, "should return 2");
  });

  test("that it returns 'undefined' if the first argument is a number", function(){
    var index = $.indexChar(6);

    equal(index, undefined, "should return undefined");
  });

  module('Customization');

  test("that setting a new 'scale' setting works", function(){
    $.indexChar.defaults.scale = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

    var index = $.indexChar('Z');

    equal(index, 0, "should return 0");
  });

  test("that passing in a new  'scale' works", function(){
    var index = $.indexChar('C',{ scale: 'ZYXWVUTSRQPONMLKJIHGFEDCBA' });

    equal(index, 23, "should return 23");
  });

  test("that passing a number as the second argument sets the index for the string given", function(){
    $.indexChar.defaults.scale = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var index = $.indexChar('ZOOLANDER',7);

    equal(index, 4, "should return 4");
  });

  test("string must be at least as long as the index", function(){
    $.indexChar.defaults.scale = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var index = $.indexChar('ZOOLANDER',17);


    equal(index, undefined, "should return 'undefined'");
  });

});
