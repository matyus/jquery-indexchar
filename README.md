#jQuery.indexChar();

[![Build Status](https://travis-ci.org/matyus/jquery-indexchar.svg)](https://travis-ci.org/matyus/jquery-indexchar)

Give it a character, match it against an alphabet.

    var index = $.indexChar('A');
    // 0

    var index = $.indexChar('z');
    // 25

##Permanently alter defaults

If you want a different alphabet, or something, you can alter the default, or pass it in:

###Alter default

    $.fn.indexChar.defaults = 'THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG';

    var index = $.indexChar('B');
    // 8

###Pass it in

    var index = $.indexChar('A',{scale: 'DCBDA'});
    // 4

