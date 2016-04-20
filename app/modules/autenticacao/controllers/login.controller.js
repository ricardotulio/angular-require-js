(
	function() {
		"use strict";

		angular.module("app.autenticacao").controller("LoginController", LoginController);

		LoginController.$inject = ["$scope"];

		function LoginController($scope) {
			console.log("teste");
		}
	}
)();