(function(){

	'use strict';

	angular.module('ipm',[
			'routes',
			'slickCarousel',
			'ui.select',
			'ngSanitize'
		]
	)
	.constant('_', window._)
	.run(["$rootScope", "$state", "$stateParams", function ($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;

		return $rootScope;
	}])
	.config(['uiSelectConfig',function(uiSelectConfig) {
		uiSelectConfig.theme = 'select2';
	}]);

})();
