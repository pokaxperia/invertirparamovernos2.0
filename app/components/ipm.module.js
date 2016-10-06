(function(){

	'use strict';

	angular.module('ipm',[
			'routes',
			'slickCarousel'
		]
	)
	.constant('_', window._)
	.run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		return $rootScope;
	}]);

})();
