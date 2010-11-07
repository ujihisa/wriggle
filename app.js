(function() {
  var App;
  App = {};
  App.main = function() {
    var _a, theSymbol, y;
    theSymbol = (function() {
      if ($.url.param('img')) {
        return $.sprintf('<img src="%s" />', $.url.param('img'));
      } else if ($.url.param('q')) {
        return $.url.param('q');
      } else {
        return '□';
      }
    })();
    $('#main').empty().hide();
    for (_a = 0; _a < 15; _a++) {
      (function() {
        var _b, x;
        var y = _a;
        for (_b = 0; _b < 20; _b++) {
          (function() {
            var tmp;
            var x = _b;
            tmp = $.sprintf('<span id="box%d%d">%s</span>', y, x, theSymbol);
            $('#main').append(tmp);
            return $($.sprintf('#box%d%d', y, x)).mouseover(function() {
              return App.dive($(this));
            });
          })();
        }
        return $('#main').append('<br />');
      })();
    }
    return $('#main').show('slow');
  };
  App.dive = function(x) {
    return x.hide('slow').show('slow');
  };
  $(document).ready(App.main);
})();
