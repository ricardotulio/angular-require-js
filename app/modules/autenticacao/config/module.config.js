define([
		"modules/autenticacao/controllers/login.controller"
	], 
	function() {
		angular.module("app.autenticacao", []).config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];

		function config($stateProvider, $urlRouterProvider) {
			$stateProvider.
				state("login", {
					url: "/login",
					templateUrl: "app/modules/autenticacao/views/login.html"
				});
		}	
	}
);