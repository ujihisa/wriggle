(function() {
  var App;
  App = {};
  App.main = function() {
    var _i, _ref, symbolSize, theSymbol, tile, y;
    theSymbol = (function() {
      if ($.url.param('img')) {
        return $.sprintf('<img src="%s" />', $.url.param('img'));
      } else if ($.url.param('q')) {
        return $.url.param('q');
      } else {
        return '■';
      }
    })();
    $('#magic').html(theSymbol);
    symbolSize = [$('#magic').width(), $('#magic').height()];
    tile = [(Math.floor(window.innerWidth - symbolSize[0] - 25) / symbolSize[0]), (Math.floor(window.innerHeight - symbolSize[1] - 25) / symbolSize[1])];
    $('#main').empty().hide();
    _ref = tile[1];
    for (_i = 0; (0 <= _ref ? _i <= _ref : _i >= _ref); (0 <= _ref ? _i += 1 : _i -= 1)) {
      (function() {
        var _j, _ref2, x;
        var y = _i;
        _ref2 = tile[0];
        for (_j = 0; (0 <= _ref2 ? _j <= _ref2 : _j >= _ref2); (0 <= _ref2 ? _j += 1 : _j -= 1)) {
          (function() {
            var tmp;
            var x = _j;
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
    return $('#main').show('fast');
  };
  App.dive = function(x) {
    return x.hide('slow').show('slow');
  };
  $(document).ready(App.main);
  window.onresize = App.main;
}).call(this);
