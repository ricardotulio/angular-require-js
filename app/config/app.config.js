(
	function() {
		"use strict";

		angular.module("app", ["ui.router", "app.autenticacao"]).config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];

		function config($stateProvider, $urlRouterProvider) {}
	}
)();