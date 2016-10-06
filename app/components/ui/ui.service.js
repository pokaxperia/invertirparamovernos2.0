(function(){
	/*
	* UI Module
	*/
	'use strict';
	
	function uiService($document, $timeout, $state){
		
		/* Template for Loader progress */
		this.loaderTemplate = [
			'<div class="cssload-container">',
				'<div class="cssload-loading"><i></i><i></i></div>',
			'</div>',
		].join('');

		this.addIsLoading = function(url, time){
				angular.element(document.getElementsByTagName("body")).append(this.loaderTemplate);
				angular.element(document.getElementsByTagName("body"))[0].style.overflow = "hidden";
				$state.go(url);
				$timeout(function() {
					angular.element(document.getElementsByClassName('cssload-container')).remove();
					angular.element(document.getElementsByTagName("body"))[0].style.overflow = "initial";
					angular.element(document.getElementsByClassName('overlay-door')).removeClass('open');
					angular.element(document.getElementsByClassName('js-is-loading')).removeClass('is_loading');
				}, time);
			
		};

		// this.removeIsLoading = function(){
		// 	return angular.element(document.getElementsByClassName('cssload-container')).remove();
		// };

	}
	uiService.$inject = ["$document","$timeout", "$state"];
	angular.module('ipm').service('uiService', uiService);
})();
