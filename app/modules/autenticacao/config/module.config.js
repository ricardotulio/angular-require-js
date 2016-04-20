(
	function() {
		"use strict";

		angular.module("app.autenticacao", []).config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];

		function config($stateProvider, $urlRouterProvider) {
			require([
				'app/modules/autenticacao/controllers/login.controller.js',
				'app/modules/autenticacao/controllers/logout.controller.js',
			]);

			$stateProvider.
				state("login", {
					url: "/login",
					templateUrl: "app/modules/autenticacao/views/login.html",
					controllerAs: "LoginController"
				});
		}
	}
)();