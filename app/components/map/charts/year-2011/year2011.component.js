(function(){
	/**
	*  KlDirective Directive
	*/
	'use strict';

	function Year2011Ctrl(_, $rootScope, $timeout){
		
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			template: [
				'<div id="year-2011" ></div>'
			].join(''),
			link: function(scope, element, attr, ctrl){
				$rootScope.$on('dataMap', function(e, data){
					zmChart(data);
					e.stopPropagation();
				});

				function zmChart(data) {
					var _zm_chart = Highcharts.chart(element[0], {
						chart: {
							type: 'bar',
							height: 500
						},
						title: {
								text: 'Inversión por tipo de infraestructura'
						},
						xAxis: {
								categories: [ 'Infraestructura Peatonal', 'Infraestructura Ciclista', 'Espacio Público', 'Transporte Público', 'Infraestructura Vehicular', 'Pavimentación'],
								title: {
										text: ''
								},
								labels: {
									useHTML: true,
									formatter: function () {
											return {
												'Infraestructura Peatonal': '<i class="ipm-pedestrian"></i>',
												'Infraestructura Ciclista': '<i class="ipm-bicycle"></i>',
												'Espacio Público': '<i class="ipm-public"></i>',
												'Transporte Público': '<i class="ipm-transport"></i>',
												'Infraestructura Vehicular': '<i class="ipm-car"></i>',
												'Pavimentación': '<i class="ipm-paving"></i>'
										}[this.value]; 
									}
								}
						},
						yAxis: {
								min: 0,
								title: {
										text: ''
								}
						},
						plotOptions: {
								bar: {
										dataLabels: {
	                    enabled: true,
	                    format: '{point.y:.1f}%'
		                }
								}
						},
						tooltip: {
							formatter: function() {
								return '<span style="font-weight: bold;">'+this.key+'<br/><b>'+ this.series.name +'</span></b>: '+this.point.y+'%';
							}
						},
						colors: ["#41AD49","#70A4D8","#E96021","#F9A01B","#71acd0"],
						series: [
							{
								name: '2011',
								data: [data.InfPeaton2011, data.Ciclopista2011, data.EPublico2011, data.TPublico2011, data.Auto2011, data.Pavimentacion2011]
							},
							{
								name: '2012',
								data: [data.InfPeaton2012, data.Ciclopista2012, data.EPublico2012, data.TPublico2012, data.Auto2012, data.Pavimentacion2012]
							},
							{
								name: '2013',
								data: [data.InfPeaton2013, data.Ciclopista2013, data.EPublico2013, data.TPublico2013, data.Auto2013, data.Pavimentacion2013]
							},
							{
								name: '2014',
								data: [data.InfPeaton2014, data.Ciclopista2014, data.EPublico2014, data.TPublico2014, data.Auto2014, data.Pavimentacion2014]
							},
							{
								name: '2015',
								data: [data.InfPeaton2015, data.Ciclopista2015, data.EPublico2015, data.TPublico2015, data.Auto2015, data.Pavimentacion2015]
							}
						]
					});

					$timeout(function() {
						_zm_chart.reflow();
					}, 1000);
				}
				
			}
		};
	}

	Year2011Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2011', Year2011Ctrl);
})();
