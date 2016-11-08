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
								text: 'Inversión por año'
						},
						xAxis: {
								type: 'category'
						},
						yAxis: {
								min: 0,
								title: {
										text: '(millones de pesos)',
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
						colors: ["#41AD49","#70A4D8","#E96021","#F9A01B","#71acd0"],
						series: [{
							nam2: "Inversión",
							colorByPoint: true,
							data:[
								{
		  		        y: parseInt(data.Total2011),
			            name: '2011'
				        },{
			            y: parseInt(data.Total2012),
			            name: '2012'
				        },{
			            y: parseInt(data.Total2013),
			            name: '2013'
				        },{
			            y: parseInt(data.Total2014),
			            name: '2014'
				        },{
			            y: parseInt(data.Total2015),
			            name: '2015'
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

	Year2012Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2012', Year2012Ctrl);
})();
