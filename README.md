# templateify

Simple [browserify v2][] plugin to require template files.

## usage
Install into your app:

    $ npm install templateify
Use it as browserify transform module with `-t`:

    $ browserify -t templateify main.js -o bundle.js

## example
Using with [mustache][]:

main.js:
``` js
var mustache = require('mustache');
var exampleTemplate = require('./example.template');

var view = {
	title: 'Templateify example',
	message: 'This is example!'
};

$('body').html(mustache.render(exampleTemplate, view));
```

example.template:
``` html
<h1>{{title}}</h1>
<p>{{message}}</p>
```

## license
MIT

[browserify v2]: https://github.com/substack/node-browserify
[mustache]: https://github.com/janl/mustache.js
