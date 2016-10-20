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

	function MapCtrl(_, $window, $timeout, $rootScope){
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			templateUrl: './components/map/map.html', 
			link: function(scope, element, attr, ctrl){
				scope.zmTitle = null;
				scope.zms = [];

		  	var _map = L.map('map').setView([24.325523, -102.162815],6);
		  	L.tileLayer('https://{s}.tiles.mapbox.com/v3/itdpmexico.ig2j36lg/{z}/{x}/{y}.png', {
					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
				}).addTo(_map);

				// var _sidebar = L.control.sidebar('sidebar', {
				//     position: 'left',
				//     closeButton: true
				// });

				// _.each(zmData.features, function(e){
				// 	scope.zms.push(
				// 		{
				// 			name: e.zm,
				// 			lat:e.properties.informacion.lat,
				// 			lng: e.properties.informacion.Long_X
				// 		}
				// 	);
				// });

		  	var _zmGeoJson = L.geoJson(zmData, {
		  		style: styleZM,
		  		onEachFeature: onEachFeatureZm
		  	}).addTo(_map);
		  	function styleZM() {
		  		return {
		  			color:'#000',
		  			dashArray: 1,
		  			fillColor: '#71B7BF',
		  			fillOpacity: 0.75,
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
					//_sidebar.show();
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
			  	customPaging : function(slider, i) {
			  		var years = ["Inversión por <br>Infraestructura", "Inversión<br>por Año", "Viajes a<br>la escuela", "Viajes<br>al trabajo"];
			  		return '<a>'+years[i]+'</a>';
			  	},
			  	dotsClass: 'slick-dots map-dots',
			  	method: {},
			  	event: {
			  		init: function(){
			  			
			  		}
			  	}
			  };

		  	//_map.addControl(_sidebar);	
		  	}		
		};

	}
	MapCtrl.$inject = ["_", "$window", "$timeout", "$rootScope"];
	angular
	.module('ipm')
	.directive('map', MapCtrl);
	

})();