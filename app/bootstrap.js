require.config({
	baseUrl: "/app",
	paths: {
		"angular": "/bower_components/angular/angular",
		"angular-ui-route": "/bower_components/angular-ui-router/release/angular-ui-router.min",
		"bootstrap": "/bower_components/bootstrap/dist/js/bootstrap.min",
		"bootstrap-modal": "/bower_components/bootstrap/js/modal",
		"jquery": "/bower_components/jquery/dist/jquery.min",
		"jquery-slimscroll": "/bower_components/slimScroll/jquery.slimscroll.min",
		"fastclick": "/bower_components/fastclick/lib/fastclick"
	},
	shim: {
		"app": {
			deps: [ "angular", "angular-ui-route", "bootstrap", "bootstrap-modal", "jquery-slimscroll", "fastclick" ]
		},
		"angular-ui-route": {
			deps: [ "angular" ]
		},
		"bootstrap": {
			deps: [ "jquery" ]
		},
		"bootstrap-modal": {
			deps: [ "bootstrap" ]
		},
		"jquery-slimscroll": {
			deps: [ "jquery" ]
		}
	}
});

require
(
	[
		"app"
	],
	function() {
		angular.bootstrap(document, ["app"]);
	}
);