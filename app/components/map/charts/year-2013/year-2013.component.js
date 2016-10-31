(function(){
	/**
	*  KlDirective Directive
	*/
	'use strict';

	function Year2013Ctrl(_, $rootScope, $timeout){
		
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			template: [
				'<div id="year-2013" ></div>'
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
							type: 'bar',
							renderTo: element[0],
							height: 500
						},
						title: {
								text: 'Viajes a la escuela'
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
						tooltip: {
							  enabled: true,
							  headerformat: ''
						},
						colors: ["#71acd0","#41AD49","#71d0c0","#70A4D8","#1f6cb2", "#E96021", "#F9A01B"],
						series: [{
	  		        data: [[data.ea]],
		            name: 'Transporte Público',
			        },{
			        	data: [[data.eb]],
		            name: 'Metro, metrobús o tren ligero',
		          },{
		            data: [[data.ec]],
		            name: 'Vehículo particular (automóvil, camioneta o motocicleta)	',
			        },{
		            data: [[data.ed]],
		            name: 'Transporte laboral',
			        },{
		            data: [[data.ee]],
		            name: 'Bicicleta',
    	        },{
                data: [[data.ef]],
                name: 'Caminando',
    	        },{
                data: [[data.eg]],
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

	Year2013Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2013', Year2013Ctrl);
})();
