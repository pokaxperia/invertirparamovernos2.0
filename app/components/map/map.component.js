(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	// var map = {
	// 	templateUrl: './components/map/map.html', 
	// 	controller: MapCtrl,
	// 	replace:true
	// }

	// var _map = null;
	// var _zmGeoJson = null;
	// var _sidebar = null;
	// var slider = null;

	function MapCtrl($window, $timeout, $rootScope){
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			templateUrl: './components/map/map.html', 
			link: function(scope, element, attr, ctrl){
				scope.zmTitle = null;

		  	var _map = L.map('map').setView([24.325523, -102.162815],6);
		  	L.tileLayer('https://{s}.tiles.mapbox.com/v3/itdpmexico.ig2j36lg/{z}/{x}/{y}.png', {
					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
				}).addTo(_map);

				var _sidebar = L.control.sidebar('sidebar', {
				    position: 'left',
				    closeButton: true
				});

		  	var _zmGeoJson = L.geoJson(zmData, {
		  		style: styleZM,
		  		onEachFeature: onEachFeatureZm
		  	}).addTo(_map);

		  	function styleZM() {
		  		return {
		  			color:'#000',
		  			dashArray: 1,
		  			fillColor: '#19BC9C',
		  			fillOpacity: 0.5,
		  			opacity: 0,
		  			weight: 2
		  		};
		  	}

		  	function highlightFeatureZM(e) {
		  		var layer = e.target;
		  		layer.setStyle({
		  			color:'#000',
		  			dashArray: 2,
		  			fillColor: '#000',
		  			fillOpacity: 0.5,
		  			opacity:0.5,
		  			weight: 2
		  		});
		  		if (!L.Browser.ie && !L.Browser.opera) {
		  			layer.bringToFront();
		  		}
		  	}

		  	function resetHighlightZM(e) {
					_zmGeoJson.resetStyle(e.target);
				}

				function zoomToFeatureZM(e) {
					_map.fitBounds(e.target.getBounds());
					_setChartData(e.target.feature.properties.informacion);
					_sidebar.show();
				}

			  function onEachFeatureZm(feature, layer) {
					layer.on({
						mouseover: highlightFeatureZM,
						mouseout: resetHighlightZM,
						click: zoomToFeatureZM
					});

					if (feature.zm) {
						layer.bindPopup(feature.zm);
					}
			  }

			  function _setChartData(data){
			  	$rootScope.$emit('dataMap', data);
			  	
			  	$timeout(function(){
			  		scope.zmTitle = data.ZM;	
			  	},0);

			  }

			  scope.slickConfig = {
			  	enabled: true,
			  	autoplay: false,
			  	draggable: false,
			  	dots: true,
			  	arrows:false,
			  	method: {},
			  	event: {
			  		init: function(){
			  			
			  		}
			  	}
			  };

		  	_map.addControl(_sidebar);	
		  	}		
		};

	}
	MapCtrl.$inject = ["$window", "$timeout", "$rootScope"];
	angular
	.module('ipm')
	.directive('map', MapCtrl);
	

})();