(function($){
  $.charIndex = function(str,opts){
  //if default setting is a number, it must be the Index Character
  if(typeof(opts) === 'number') {
    opts = {indexChar:opts};
  }

  var settings = $.extend({}, $.charIndex.defaults, opts),
      glyph    = str.charAt(settings.indexChar).toUpperCase();

    return settings.scale.indexOf(glyph);
  };

  $.charIndex.defaults = {
    indexChar: 0,
    scale    :'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };
}(jQuery));
