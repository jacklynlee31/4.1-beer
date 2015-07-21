var templateString = document.querySelector('main-template').innerHTML;

var temp = Handlebars.compile(templateString);
var output = template('beer');

// (function() {

// // var contentEl = document.querySelector('.content');

// 	function registerByQuery(querySelector) {
// 	  var templateString = document.querySelector(querySelector).innerHTML;
// 	  templateString = templateString.replace('&gt;', '>');

// 	  return Handlebars.compile(templateString);
// 	}

// 	#main-template = registerByQuery(querySelector) {
// 		var templateString = document.
// 	}

// })();
