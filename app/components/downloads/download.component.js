(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	var downloads = {
		templateUrl: './components/downloads/downloads.html', 
		controller: DownloadsCtrl,
		replace:false,
	};

	var overlayMenu = null;
	var isMenuOpen = false;
	var random_class = null;
	var isRandomPath = null;
	var menuButton, twitterIcon, facebookIcon, titleLanding = null;

	function DownloadsCtrl(){
		var dwlds = this;

	}
	
	angular
	.module('ipm')
	.component('downloads', downloads);
	DownloadsCtrl.$inject = [];

})();