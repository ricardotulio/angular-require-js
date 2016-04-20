require.config({
	baseUrl: '/application'
});

require(
	[
		'app/config/app.config.js',
		'app/modules/autenticacao/config/module.config.js'
	],
	function() {
		angular.bootstrap(document, ['app']);
	});