(function() {
  var beersEl = document.querySelector('.beers');
  var templateString = document.querySelector('#main-template').innerHTML;

  var t = Handlebars.compile(templateString);
  var result = '';

  beerData.data.forEach(function(beer) {
    result += t(beer);
    beersEl.innerHTML = result;
  });
})();
