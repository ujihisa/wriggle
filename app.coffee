#class App
App = {}

App.main = ->
  theSymbol =
    if $.url.param('img')
      $.sprintf('<img src="%s" />', $.url.param 'img')
    else if $.url.param('q')
      $.url.param('q')
    else
      '[]'

  $('#magic').html(theSymbol)
  symbolSize = [$('#magic').width(), $('#magic').height()]
  tile = [(Math.floor(window.innerWidth-symbolSize[0]-100) / symbolSize[0]),
          (Math.floor(window.innerHeight-symbolSize[1]-100) / symbolSize[1])]

  $('#main').empty().hide()
  for y in [0..tile[1]]
    for x in [0..tile[0]]
      tmp = $.sprintf '<span id="box%d%d">%s</span>', y, x, theSymbol
      $('#main').append tmp
      $($.sprintf('#box%d%d', y, x)).mouseover ->
        App.dive($(this))
    $('#main').append '<br />'
  $('#main').show 'fast'

App.dive = (x) ->
  x.hide('slow').show('slow')

$(document).ready App.main
window.onresize = App.main
