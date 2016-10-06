(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	var downloads = {
		templateUrl: './components/downloads/downloads.html', 
		controller: DownloadsCtrl,
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

	function DownloadsCtrl(){
		var dwlds = this;
		console.log(isMenuOpen)
		console.log(dwlds.isMenuOpenmsg)

	}
	
	angular
	.module('ipm')
	.component('downloads', downloads);
	DownloadsCtrl.$inject = [];

})();