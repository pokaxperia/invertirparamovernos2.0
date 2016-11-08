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
								text: 'Reparto modal'
						},
						tooltip: {
							pointFormat: '<span style="color:{point.color}"></span> {series.name}: <b>{point.y}</b><br/>.'
						},
						xAxis: {
							categories: ['Caminando', 'Bicicleta', 'Transporte público', 'Transporte Laboral', 'Vehículo', 'Otro'],
							title: {
									text: ''
							},
							labels: {
								useHTML: true,
								formatter: function () {
										return {
											'Caminando': '<i class="ipm-pedestrian"></i>',
											'Bicicleta': '<i class="ipm-bicycle"></i>',
											'Transporte público': '<i class="ipm-transport"></i>',
											'Transporte Laboral': '<i class="ipm-transport-lab"></i>',
											'Vehículo': '<i class="ipm-car"></i>',
											'Otro': '<i class="ipm-other"></i>'
									}[this.value]; 
								}
							}								
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
						colors: ["#71acd0","#41AD49","#71d0c0","#1f6cb2", "#E96021", "#F9A01B"],
						series: [
							{
                data: [data.ef, data.ee, data.ea, data.ed, data.ec, data.eg],
                name: 'Viajes a la escuela',
    	        },
							{
                data: [data.tf, data.te, data.ta, data.td, data.tc, data.tg],
                name: 'Viajes al trabajo',
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

	Year2013Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2013', Year2013Ctrl);
})();
