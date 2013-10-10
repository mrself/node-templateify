var mustache = require('mustache');
var exampleTemplate = require('./example.template');

var view = {
	title: 'Templateify example',
	message: 'This is example!'
};

$('body').html(mustache.render(exampleTemplate, view));
