var through = require('through');

module.exports = function (file) {
	if (!/\.(template|njk|mustache|tpl)$/.test(file)) return through();

	var buffer = '';

	return through(
		function write(chunk) {
			buffer += chunk;
		},
		function end() {
			this.queue("module.exports='" + buffer.replace(/'/g, "\\'").replace(/(\r\n|\n|\r)/g, '\\\n') + "';");
			this.queue(null);
		}
	);
};
