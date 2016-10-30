(function(){
	/*
	* UI Module
	*/
	'use strict';
	
	function uiService($document, $timeout, $state){
		
		/* Template for Loader progress */
		this.loaderChart = [
			'<div id="floatingCirclesG">',
				'<div class="f_circleG" id="frotateG_01"></div>',
				'<div class="f_circleG" id="frotateG_02"></div>',
				'<div class="f_circleG" id="frotateG_03"></div>',
				'<div class="f_circleG" id="frotateG_04"></div>',
				'<div class="f_circleG" id="frotateG_05"></div>',
				'<div class="f_circleG" id="frotateG_06"></div>',
				'<div class="f_circleG" id="frotateG_07"></div>',
				'<div class="f_circleG" id="frotateG_08"></div>',
			'</div>'
		].join('');
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

		this.chartIsLoading = function(){
			angular.element(document.getElementsByClassName("m-sidebar")).append(this.loaderChart);
		};
		this.chartLoaded = function() {
			return angular.element(document.getElementById('floatingCirclesG')).css("opacity", 0).remove();
		};

	}
	uiService.$inject = ["$document","$timeout", "$state"];
	angular.module('ipm').service('uiService', uiService);
})();
