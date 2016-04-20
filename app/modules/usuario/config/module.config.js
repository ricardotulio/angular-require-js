define(
	[
		"modules/usuario/controllers/usuariolistar.controller"
	], 
	function() {
		angular.module("app.usuario", []).config(config);

		config.$inject = ["$stateProvider", "$urlRouterProvider"];

		function config($stateProvider, $urlRouterProvider) {
			$stateProvider.
				state("layout.usuarios", {
					url: "/usuarios",
					templateUrl: "app/modules/usuario/views/listar.html",
					controller: "UsuarioListarController"
				});
		}
	}
);