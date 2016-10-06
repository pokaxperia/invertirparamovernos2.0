(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	var landing = {
		templateUrl: './components/landing/landing.html', 
		controller: LandingCtrl,
		replace:false,
		bindings: {
			projectTitle: '@?bind',
			projectContent: '@?bind'
		}
	};

	var _currentStringIndex = null,
	_title_animation = null,
	_content_animation = null,
	_timming = null,
	_titleProject = [],
	_contentProject = [],
	_titleElement = null,
	_contentElement = null,
	_timmingFunction = null,
	_$animationContainers = null,
	_$elementToAnimate = null,
	_$elementHeight = null,
	_$elementTopPosition = null,
	_$elementBottomPosition = null,
	_$window = null,
	_$window_height = null,
	_$window_top_position = null,
	_$window_bottom_position = null;


	function LandingCtrl($window, $timeout, $interval, $rootScope){
		var ctrl = this,
		_$window = angular.element($window);
		_$animationContainers = angular.element(document.getElementsByClassName('animation-container'));

		_$window.on('scroll', _checkIfInView);

		function _checkIfInView(){
			_$window_height = _$window.height();
			_$window_top_position = _$window.scrollTop();
			_$window_bottom_position = _$window_top_position + _$window_height;

			_.each(_$animationContainers, function(e){
				_$elementToAnimate = angular.element(e);
				_$elementHeight = _$elementToAnimate.outerHeight();
				_$elementTopPosition = _$elementToAnimate.offset().top;
				_$elementBottomPosition = (_$elementTopPosition + _$elementHeight + 500);

				if ((_$elementBottomPosition >= _$window_top_position) && (_$elementTopPosition <= _$window_bottom_position)) {
						_$elementToAnimate.addClass('in-view');
					
		    }
			});
		};

		_currentStringIndex = -1;
		_titleElement = angular.element(document.getElementById('titleElement'));
		_contentElement = angular.element(document.getElementById('contentElement'));

		_title_animation = [
			{transform: 'translateY(0px)', 'webkit-transform': 'translateY(0px)', opacity: 1},
			{transform: 'translateY(50px)', 'webkit-transform': 'translateY(50px)', opacity: 0},
			{transform: 'translateY(50px)', 'webkit-transform': 'translateY(50px)', opacity: 0},
			{transform: 'translateY(0px)', 'webkit-transform': 'translateY(0px)', opacity: 1}
		];
		_content_animation = [
			{transform: 'translateY(0px)', '-webkit-transform': 'translateY(0px)', opacity: 1},
			{transform: 'translateY(-50px)', '-webkit-transform': 'translateY(-50px)', opacity: 0},
			{transform: 'translateY(-50px)', '-webkit-transform': 'translateY(-50px)', opacity: 0},
			{transform: 'translateY(0px)', '-webkit-transform': 'translateY(0px)', opacity: 1}
		];
		_timming = {
			duration: 1000,
			easing: 'ease-in-out',
			fill: 'backwards'
		};
		_titleProject = [
			'Movilidad',
			'Monitorear y analizar',
			'Informar y promover'
		];
		_contentProject = [
			"La movilidad se entiende como la infraestructura con la cual el ciudadano puede desplazarse dentro de las ciudades y provincias; infraestructura vial, infraestructura peatonal, infraestructura ciclista y transporte público",
			"Invertir para Movernos tiene como objetivo monitorear y analizar el gasto de los fondos federales, con énfasis en movilidad urbana, que se realiza en las 59 Zonas Metropolitanas del país",
			"Invertir para Movernos esta disponible a partir del 2011 con la motivación principal de seguir informando y promoviendo políticas públicas a favor de todos los ciudadanos"
		];

		ctrl.$onInit = function() {
			$interval.cancel(_timmingFunction);
			_timmingFunction = undefined;
			ctrl.projectTitle = undefined;

			ctrl.projectTitle = _titleProject[0];
			ctrl.projectContent = _contentProject[0];
			_timmingFunction = $interval(_setContentInterval, 8000);
		};

		function _setContentInterval() {
			_titleElement[0].animate(_title_animation, _timming);
			_contentElement[0].animate(_content_animation, _timming);
			_changeContent();
		}

		function _changeContent() {
			$timeout(function(){
				_currentStringIndex = (_currentStringIndex + 1) % _titleProject.length;
				_currentStringIndex = (_currentStringIndex + 1) % _contentProject.length;
				ctrl.projectTitle = _titleProject[_currentStringIndex];
				ctrl.projectContent = _contentProject[_currentStringIndex];
			}, 500);

			$interval.cancel(_timmingFunction);
			_timmingFunction = $interval(_setContentInterval, 8000);
		}
	}
	
	angular
	.module('ipm')
	.component('landing', landing);
	LandingCtrl.$inject = ["$window", "$timeout", "$interval", "$rootScope"];

})();