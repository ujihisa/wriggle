(function() {
  $(document).ready(function() {
    var _a, y;
    $('#main').empty().hide();
    for (_a = 0; _a < 15; _a++) {
      (function() {
        var _b, x;
        var y = _a;
        for (_b = 0; _b < 20; _b++) {
          (function() {
            var x = _b;
            $('#main').append($.sprintf('<span id="box%d%d">%s</span>', y, x, (function() {
              if ($.url.param('img')) {
                return $.sprintf('<img src="%s" />', $.url.param('img'));
              } else if ($.url.param('q')) {
                return $.url.param('q');
              } else {
                return '□';
              }
            })()));
            return $($.sprintf('#box%d%d', y, x)).mouseover(function() {
              return $(this).hide('slow').show('slow');
            });
          })();
        }
        return $('#main').append('<br />');
      })();
    }
    return $('#main').show('slow');
  });
})();
