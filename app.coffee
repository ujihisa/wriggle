#class App
App = {}

App.main = ->
  theSymbol =
    if $.url.param('img')
      $.sprintf('<img src="%s" />', $.url.param 'img')
    else if $.url.param('q')
      $.url.param('q')
    else
      '□'

  $('#main').empty().hide()
  for y in [0...15]
    for x in [0...20]
      tmp = $.sprintf '<span id="box%d%d">%s</span>', y, x, theSymbol
      $('#main').append tmp
      $($.sprintf('#box%d%d', y, x)).mouseover ->
        App.dive($(this))
    $('#main').append '<br />'
  $('#main').show 'slow'

App.dive = (x) ->
  x.hide('slow').show('slow')

$(document).ready App.main
