$(document).ready ->
  $('#main').empty().hide()
  for y in [0...15]
    for x in [0...20]
      $('#main').append $.sprintf '<span id="box%d%d">%s</span>', y, x, if $.url.param('img') then $.sprintf('<img src="%s" />', $.url.param 'img') else if $.url.param('q') then $.url.param('q') else '□'
      $($.sprintf('#box%d%d', y, x)).mouseover -> $(this).hide('slow').show('slow')
    $('#main').append '<br />'
  $('#main').show 'slow'
