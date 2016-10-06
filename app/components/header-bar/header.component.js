(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	var headerBar = {
		templateUrl: './components/header-bar/header.html', 
		controller: HeaderCtrl,
		replace:false,
		bindings: {
			isLoadingView: '@?bind',
			isMenuOpen: '@?bind',
		}
	};

	var overlayMenu = null;
	var isMenuOpen = false;
	var random_class = null;
	var isRandomPath = null;
	var menuButton, twitterIcon, facebookIcon, titleLanding = null;

	function HeaderCtrl($rootScope, $window, $timeout, $location, $element, $attrs, uiService){

		var head = this;
		menuButton = angular.element(document.getElementById('menuButton'));
		twitterIcon = angular.element(document.getElementById('social'));
		titleLanding = angular.element(document.getElementById('titleLanding'));

		overlayMenu = $element[0].children[2];
		random_class = ['rgba(57,57,58,1)','rgba(41,115,115,1)','rgba(122,158,159,1)','rgba(255,133,82,1)'];
		isRandomPath = random_class[Math.floor(Math.random()*random_class.length)];

		head.$onInit = function() {
			head._changeColor();
			$rootScope.$on('$stateChangeSuccess', function(event, toState) {
				head._changeColor(toState.url);
			});
			
			menuButton[0].style.backgroundColor = isRandomPath;
			twitterIcon[0].children[0].children[0].style.color = isRandomPath;
			twitterIcon[0].children[1].children[0].style.color = isRandomPath;
			overlayMenu.style.backgroundColor = isRandomPath;
		};

		head._changeColor = function(url) {
			if (url === "/" || $location.path() === "/") {
				titleLanding[0].style.color = "#ffffff";
			}
			if (url === "/resultados" || $location.path() === "/resultados") {
				titleLanding[0].style.color = "#39393A";
			}
			if (url === "/mapa" || $location.path() === "/mapa") {
				titleLanding[0].style.color = "#39393A";
			}
		};

		head.goToView = function(url) {
			angular.element(document.getElementsByClassName('js-is-loading')).addClass('is_loading');
			uiService.addIsLoading(url, 2000);
			$timeout(function() {
				head.isMenuOpen = false;
			}, 2000);
			
			//head.isMenuOpen !== true ? head.isMenuOpen = true: head.isMenuOpen = false;
		}

		head.openMenu = function() {
			head.isMenuOpen !== true ? head.isMenuOpen = true: head.isMenuOpen = false;
		};
		
		//twitterIcon[0].style.color = isRandomPath;
		// facebookIcon.style.color = isRandomPath;
		// menuButton.style.backgroundColor = isRandomPath;

	}
	
	angular
	.module('ipm')
	.component('headerBar', headerBar);
	HeaderCtrl.$inject = ["$rootScope", "$window", "$timeout", "$location", "$element", "$attrs", "uiService"];

	// landingController.$inject = ['$window', '$timeout'];
	// angular.module('ipm').directive('landingController', landingController);

})();