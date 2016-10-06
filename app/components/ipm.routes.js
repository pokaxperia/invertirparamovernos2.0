(function(){
	'use strict';
	
	angular.module('routes', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('/', {
				url: '/',
				template: '<landing></landing>'
			})
			.state('resultados', {
				url: '/resultados',
				template: '<results></results>',
			})
			.state('mapa', {
				url: '/mapa',
				template: '<map></map>'
			})
			.state('descargas', {
				url: '/descargas',
				template: '<downloads></downloads>',
			});
	}]);

})();