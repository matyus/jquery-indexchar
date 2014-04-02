(function($){
  $.indexChar = function(str,opts){
  if(typeof(str) === 'number') {
    return undefined;
  }

  //if default setting is a number, it must be the Index Character
  if(typeof(opts) === 'number') {
    if(str.length <= opts) {
      return undefined;
    }

    opts = {indexChar:opts};
  }

  var settings = $.extend({}, $.indexChar.defaults, opts),
      glyph    = str.charAt(settings.indexChar).toUpperCase();

      settings.scale = settings.scale.toUpperCase();

    return settings.scale.indexOf(glyph);
  };

  $.indexChar.defaults = {
    indexChar: 0,
    scale    :'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  };
}(jQuery));
