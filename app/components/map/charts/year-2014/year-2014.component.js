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
				'<div id="year-2014"></div>'
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
								text: 'Crecimiento poblacional'
						},
						xAxis: {
								type: 'category'
						},
						yAxis: {
								min: 0,
								title: {
										text: '(millones de habitantes)',
										align: 'high'
								}
						},
						plotOptions: {
		            series: {
  									dataLabels: {
                      enabled: true,
  	                }
		            }
		        },
		        legend: {
		            enabled: false
		        },
		        tooltip: {
		        	  enabled: false
		        },
						colors: ["#41AD49","#70A4D8","#E96021","#F9A01B"],
						series: [{
							nam2: "Población",
							colorByPoint: true,
							data:[
								{
		  		        y: parseInt(data.Pob90),
			            name: 'Población año 1990'
				        },{
			            y: parseInt(data.Pob00),
			            name: 'Población año 2000'
				        },{
			            y: parseInt(data.Pob10),
			            name: 'Población año 2010'
				        },{
			            y: parseInt(data.Pob15),
			            name: 'Población año 2015'
				        }]
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
