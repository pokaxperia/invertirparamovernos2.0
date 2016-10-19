(function(){
	/**
	*  KlDirective Directive
	*/
	'use strict';

	function Year2012Ctrl(_, $rootScope, $timeout){
		
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			template: [
				'<div id="year-2012" ></div>'
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
								text: 'Inversión por Año'
						},
						xAxis: {
								categories: ['']
						},
						yAxis: {
								min: 0,
								title: {
										text: '(millones de pesos)',
										align: 'high'
								}
						},
						plotOptions: {
								bar: {
										dataLabels: {
	                    enabled: true
		                }
								}
						},
						series: [{
	  		        data: [[data.Total2011]],
		            name: '2011'
			        },{
		            data: [[data.Total2012]],
		            name: '2012'
			        },{
		            data: [[data.Total2013]],
		            name: '2013'
			        },{
		            data: [[data.Total2014]],
		            name: '2014'
			        },{
		            data: [[data.Total2015]],
		            name: '2015'
			        }]
					});

					$timeout(function() {
						_zm_chart.reflow();
					}, 1000);
				}

				
			}
		};
	}

	Year2012Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2012', Year2012Ctrl);
})();
