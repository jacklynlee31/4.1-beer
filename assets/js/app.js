(function() {
  var beersEl = document.querySelector('.beers');
  var templateString = document.querySelector('#main-template').innerHTML;

  var t = Handlebars.compile(templateString);
  var result = '';

  beerData.data.forEach(function(beer) {
    result += t(beer);
    beersEl.innerHTML = result;
  });

  var gridEl = document.querySelector('.grid');

  gridEl.onclick = function() {
    beersEl.classList.add('grid');
    beersEl.classList.remove('list');
  };

  var listEl = document.querySelector('.list');

  listEl.onclick = function() {
    beersEl.classList.add('list');
    beersEl.classList.remove('grid');
  };

})();
