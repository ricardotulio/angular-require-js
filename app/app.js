define(
	[
		"modules/autenticacao/config/module.config"
	], 
	function() {
		var app = angular.module("app", ["ui.router"]).config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];

		function config($stateProvider, $urlRouterProvider) {
			$stateProvider
				.state('layout', {
					views:  {
						"": { templateUrl: "app/template/template.html" },
						"header@layout": {
							templateUrl: "app/template/header.html"
						},	
						"sidebar@layout": {
							templateUrl: "app/template/sidebar.html"
						},						
						"footer@layout": {
							templateUrl: "app/template/footer.html"
						}
					},
					abstract: true
				});
		}

		return app;
	}
);