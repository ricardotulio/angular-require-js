define([], function() {
		"use strict";

		angular.module("app.usuario").controller("UsuarioListarController", UsuarioListarController);

		UsuarioListarController.$inject = ["$scope"];

		function UsuarioListarController($scope) {
			$scope.usuarios = [
				{
					id: 1,
					login: "ricardoledo",
					criadoEm: "14-06-1991",
					atualizadoEm: null,
					ativo: true
				}
			];
		}
	}
);