define([], 
	function() {
		angular.module("app.autenticacao").controller("LoginController", LoginController);

		LoginController.$inject = ["$scope"];

		function LoginController($scope) {
			$scope.login = function(usuario) {

			}

		}
	}
);