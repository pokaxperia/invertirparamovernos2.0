(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	function MapCtrl(_, $window, $timeout, $rootScope, uiService){
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			templateUrl: './components/map/map.html', 
			link: function(scope, element, attr, ctrl){
				scope.zmTitle = null;
				scope.zms = [];
				uiService.chartIsLoading();

				angular.element(document.getElementsByClassName("m-sidebar__infra")).css("display", "block");
				$timeout(function() {
					uiService.chartLoaded();
					var currentZm = _.findWhere(zmData.features, { zm: "Valle de México"});
					_setChartData(currentZm.properties.informacion);
				}, 2000);

		  	var _map = L.map('map').setView([19.47152819193908, -99.05582722634055],9);
		  	L.tileLayer('https://{s}.tiles.mapbox.com/v3/itdpmexico.ig2j36lg/{z}/{x}/{y}.png', {
					attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
				}).addTo(_map);

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
					var selectedZmId = _.findWhere(scope.itemArray, { zm: e.target.feature.zm})
					_map.fitBounds(e.target.getBounds());
					scope.selected = { value: scope.itemArray[selectedZmId.id - 1] };
					_setChartData(e.target.feature.properties.informacion);
					
				}

			  function _setChartData(data){
			  	$rootScope.$emit('dataMap', data);
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
			  scope.itemArray = [
				  {id:1, zm: 'Acapulco',lat:16.97932681281335, lon:-99.89283719518407, zoom: 10},
				  {id:2, zm: 'Acayucan', lat:18.0200011785468, lon:-94.99860771627891, zoom:11},
				  {id:3, zm: 'Aguascalientes', lat:21.951641924508095, lon:-102.26812238895688, zoom: 11},
				  {id:4, zm: 'Cancún', lat:21.044318716416065, lon:-86.96787495733386, zoom: 10},
				  {id:5, zm: 'Celaya', lat:20.579275941960326, lon:-100.9084036690012, zoom: 10},
				  {id:6, zm: 'Chihuahua', lat:28.710724370515393, lon:-106.02429686090744, zoom: 11},
				  {id:7, zm: 'Coatzacoalcos', lat:18.090547969646057, lon:-94.452214041385, zooom: 11},
				  {id:8, zm: 'Colima-Villa de Álvarez', lat:19.27955887185261, lon:-103.75429212451364, zoom: 10},
				  {id:9, zm: 'Córdoba', lat:18.89094508219219, lon:-96.90625933924926, zoom: 11},
				  {id:10, zm: 'Cuautla', lat:18.79196803482086, lon:-98.97004014557164, zoom: 11},
				  {id:11, zm: 'Cuernavaca', lat: 18.8666693074184, lon: -99.19942700907569, zoom: 11},
				  {id:12, zm: 'Guadalajara', lat:20.58106869478855, lon:-103.34232506215895, zoom: 10},
				  {id:13, zm: 'Guaymas', lat:27.802769301320822, lon:-110.61453773438713, zoom: 10},
				  {id:14, zm: 'Juárez', lat:31.65391111088903, lon:-106.43276798806103, zoom:11},
				  {id:15, zm: 'La Laguna', lat:25.55031175570727, lon:-103.40569492596123, zoom: 10},
				  {id:16, zm: 'La Piedad-Pénjamo', lat:20.37427189653517, lon:-101.87437344939941, zoom: 10},
				  {id:17, zm: 'León', lat:21.054550035635852, lon:-101.56392841201249, zoom: 10},
				  {id:18, zm: 'Matamoros', lat:25.8718080375227, lon:-97.62272321029494, zoom: 10},
				  {id:19, zm: 'Mérida', lat:20.96385935028844, lon:-89.63341661628708, zoom: 11},
				  {id:20, zm: 'Mexicali', lat:31.850963061528436, lon:-115.16176729714999, zoom: 8},
				  {id:21, zm: 'Minatitlán', lat:18.015201490876382, lon:-94.59288291206241, zoom: 11},
				  {id:22, zm: 'Monclova-Frontera', lat:34.016241889667015, lon:-108.402099609375, zoom: 6},
				  {id:23, zm: 'Monterrey', lat:25.664080013887403, lon:-100.28111214588702, zoom: 9},
				  {id:24, zm: 'Morelia', lat: 19.755023708793196, lon: -101.2173451346164},
				  {id:25, zm: 'Moroleón-Uriangato', lat:20.135224338405422, lon:-101.18730891208756, zoom:13},
				  {id:26, zm: 'Nuevo Laredo', lat:17.093541801797898, lon:-99.1021728515625, zoom: 7},
				  {id:27, zm: 'Oaxaca', lat:17.05963724617555, lon:-96.72366687222352, zoom: 11},
				  {id:28, zm: 'Ocotlán', lat:20.34173255262603, lon:-102.88922490312405, zoom: 11},
				  {id:29, zm: 'Orizaba', lat:18.866055007115914, lon:-97.13953146733664, zoom: 11},
				  {id:30, zm: 'Pachuca', lat: 20.00386406405472, lon: -98.76750537160022, zoom: 11},
				  {id:31, zm: 'Piedras Negras', lat:28.573688099860977, lon:-100.64236934282641, zoom:11},
				  {id:32, zm: 'Poza Rica', lat:20.490936768611313, lon:-97.39719477966196, zoom: 10},
				  {id:33, zm: 'Puebla-Tlaxcala',lat :19.138570989148764,lon:-98.2246766388583},
				  {id:34, zm: 'Puerto Vallarta', lat:20.69832620111513, lon:-105.1489176295303, zoom: 11},
				  {id:35, zm: 'Querétaro', lat: 20.619737786410546, lon: -100.37221508258263, zoom: 10},
				  {id:36, zm: 'Reynosa-Río Bravo', lat:26.03544144838559, lon:-98.17964382087804, zoom: 10},
				  {id:37, zm: 'Rioverde-Ciudad Fernández', lat:21.930313884219455, lon:-100.00579079180935, zoom:12},
				  {id:38, zm: 'Saltillo', lat:25.45679847418931, lon:-100.93974700604026, zoom: 11},
				  {id:39, zm: 'San Francisco del Rincón', lat:21.02864192593463, lon:-101.85886773582703, zoom:13},
				  {id:40, zm: 'San Luis Potosí-Soledad de Graciano Sánchez', lat:22.1255908634478, lon:-100.96914700886161, zoom: 11},
				  {id:41, zm: 'Tampico', lat:22.28985630343277, lon:-98.13644955995645, zoom: 9},
				  {id:42, zm: 'Tecomán', lat:18.9178997571369, lon:-103.84861801889126, zoom: 11},
				  {id:43, zm: 'Tehuacán', lat: 18.490355124976816, lon :-97.46354815074523, zoom: 11},
				  {id:44, zm: 'Tehuantepec',lat:16.221338566467967, lon:-95.27598046826591, zoom: 11},
				  {id:45, zm: 'Tepic', lat:15.744675578471627, lon:-101.5081787109375, zoom: 7},
				  {id:46, zm: 'Teziutlán', lat:19.835332040544277, lon: -97.37720144847, zoom: 12},
				  {id:47, zm: 'Tianguistenco', lat:19.177972165127695, lon:-99.46151362807115, zoom: 12},
				  {id:48, zm: 'Tijuana', lat:32.39615675712228, lon:-116.70015092884576, zoom: 9},
				  {id:49, zm: 'Tlaxcala-Apizaco', lat:19.368936969897003, lon:-98.16447237074715, zoom: 11},
				  {id:50, zm: 'Toluca', lat:19.329098767241568, lon:-99.61592752756711, zoom: 10},
				  {id:51, zm: 'Tula', lat:20.05138314977256, lon:-99.27321946242459, zoom: 11},
				  {id:52, zm: 'Tulancingo', lat:20.08477195231313, lon:-98.329721882111, zoom: 11},
				  {id:53, zm: 'Tuxtla Gutiérrez', lat:16.750852313801374, lon:-93.13106675575897, zoom: 11},
				  {id:54, zm: 'Valle de México', lat :19.47152819193908, lon: -99.05582722634055, zoom: 9},
				  {id:55, zm: 'Veracruz', lat:18.998364060083677, lon:-96.01565606619339, zoom: 10},
				  {id:56, zm: 'Villahermosa', lat:18.010735943156714, lon:-92.91260506229776, zoom: 11},
				  {id:57, zm: 'Xalapa', lat:19.48129659957329, lon:-96.77715646837171, zoom: 10},
				  {id:58, zm: 'Zacatecas-Guadalupe', lat:22.759685467702713, lon:-102.51633628459278, zoom: 11},
				  {id:59, zm: 'Zamora-Jacona', lat:20.012287310294393, lon:-102.28901526912398, zoom: 12},
	      ];

	      scope.selected = { value: scope.itemArray[53] };

	      scope.zoomToZM = function(a) {
	      	var selectedZm = _.findWhere(zmData.features, { zm: a.zm});
	      	_map.setView([a.lat, a.lon], a.zoom);
	      	_setChartData(selectedZm.properties.informacion);
	      }
		  }
		};

	}
	MapCtrl.$inject = ["_", "$window", "$timeout", "$rootScope", "uiService"];
	angular
	.module('ipm')
	.directive('map', MapCtrl);
	

})();