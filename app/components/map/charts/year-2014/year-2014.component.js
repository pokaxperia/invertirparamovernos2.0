(function(){
	/**
	*  KlDirective Directive
	*/
	'use strict';

	function Year2014Ctrl(_, $rootScope, $timeout){
		
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			template: [
				'<div id="year-2014" ></div>'
			].join(''),
			link: function(scope, element, attr, ctrl){
				$rootScope.$on('dataMap', function(e, data){
					inversionZmChart(data);
					e.stopPropagation();
				});

				function inversionZmChart(data) {
					var _zm_chart = Highcharts.setOptions({
						lang: {
							thousandsSep: ','
						}
					});

					_zm_chart = new Highcharts.Chart({
						chart: {
							type: 'column',
							renderTo: element[0],
							height: 500
						},
						title: {
								text: 'Viajes al trabajo'
						},
						tooltip: {
								pointFormat: '<span style="color:{point.color}"></span> {series.name}: <b>{point.y}</b><br/>.'
						},
						xAxis: {
								categories: ['']
						},
						yAxis: {
								min: 0,
								title: {
										text: 'Número de viajes',
								}
						},
						plotOptions: {
								bar: {
										dataLabels: {
	                    enabled: true
		                }
								}
						},
						legend: {
							layout: 'vertical'
						},
						colors: ["#1f6cb2","#4a7ab2","#6f8fc9","#71acd0","#71b7bf", "#71d0c0", "#6fc0ae"],
						series: [{
	  		        data: [[data.ta]],
		            name: 'Camión, taxi, combi o colectivo',
			        },{
		            data: [[data.tb]],
		            name: 'Metro, metrobús o tren ligero',
			        },{
		            data: [[data.tc]],
		            name: 'Vehículo particular (automóvil, camioneta o motocicleta)	',
			        },{
		            data: [[data.td]],
		            name: 'Transporte laboral',
			        },{
		            data: [[data.te]],
		            name: 'Bicicleta',
    	        },{
                data: [[data.tf]],
                name: 'Caminando',
    	        },{
                data: [[data.tg]],
                name: 'Otro'
    	        }]
					});

					$timeout(function() {
						_zm_chart.reflow();
					}, 1000);
				}

				
			}
		};
	}

	Year2014Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2014', Year2014Ctrl);
})();
