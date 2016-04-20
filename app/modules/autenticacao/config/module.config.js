define([], function() {
		angular.module("app.autenticacao", []).config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];

		function config($stateProvider, $urlRouterProvider) {
			$stateProvider.
				state("login", {
					url: "/login",
					templateUrl: "app/modules/autenticacao/views/login.html",
					controller: "LoginController"
				});
		}

		require([
			"modules/autenticacao/controllers/login.controller",
			"modules/autenticacao/controllers/logout.controller"
		]);
	}
);