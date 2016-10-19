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
	var menuButton, twitterIcon, facebookIcon, titleLanding, logoIpm = null;

	function HeaderCtrl($rootScope, $window, $timeout, $location, $element, $attrs, uiService){

		var head = this;
		menuButton = angular.element(document.getElementById('menuButton'));
		twitterIcon = angular.element(document.getElementById('social'));
		titleLanding = angular.element(document.getElementById('titleLanding'));
		logoIpm = angular.element(document.getElementById('logo_ipm'));

		overlayMenu = $element[0].children[2];

		head.$onInit = function() {
			head._changeColor();
			$rootScope.$on('$stateChangeSuccess', function(event, toState) {
				head._changeColor();
			});

			menuButton[0].style.backgroundColor = 'rgba(57,57,58,1)';
			overlayMenu.style.backgroundColor = 'rgba(57,57,58,1)';
		};

		head._changeColor = function() {

			if ($location.path() === "/") {
				twitterIcon[0].children[0].children[0].style.color = '#ffffff';
				twitterIcon[0].children[2].children[0].style.color = '#ffffff';
				twitterIcon[0].children[3].children[0].style.color = '#ffffff';
				logoIpm[0].setAttribute('src', './images/logo_ipm_white.png');
			}
			if ($location.path() === "/resultados" || $location.path() === "/descargas" || $location.path() === "/mapa") {
				twitterIcon[0].children[0].children[0].style.color = '#545454';
				twitterIcon[0].children[2].children[0].style.color = '#545454';
				twitterIcon[0].children[3].children[0].style.color = '#545454';
				logoIpm[0].setAttribute('src', './images/logo_ipm_gray.png');
			}
		};

		head.goToView = function(url) {
			angular.element(document.getElementsByClassName('js-is-loading')).addClass('is_loading');
			uiService.addIsLoading(url, 2000);
			$timeout(function() {
				head.isMenuOpen = false;
			}, 2000);

		}

		head.openMenu = function() {
			head.isMenuOpen !== true ? [head.isMenuOpen = true, logoIpm[0].setAttribute('src', './images/logo_ipm_white.png')]: [head.isMenuOpen = false,logoIpm[0].setAttribute('src', './images/logo_ipm_gray.png')];
		};

	}
	
	angular
	.module('ipm')
	.component('headerBar', headerBar);
	HeaderCtrl.$inject = ["$rootScope", "$window", "$timeout", "$location", "$element", "$attrs", "uiService"];

})();