(function(){
	/**
	*  KlDirective Directive
	*/
	'use strict';

	function Year2015Ctrl(_, $rootScope, $timeout){
		
		return {
			restrict: 'E',
			replace:true,
			scope: '=',
			template: [
				'<div id="year-2015" ></div>'
			].join(''),
			link: function(scope, element, attr, ctrl){
				var _year2015 = Highcharts.chart(element[0], {
					chart: {
					type: 'bar'
					},
					title: {
							text: 'Stacked bar chart'
					},
					xAxis: {
							categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
					},
					yAxis: {
							min: 0,
							title: {
									text: 'Total fruit consumption'
							}
					},
					legend: {
							reversed: true
					},
					plotOptions: {
							series: {
									stacking: 'normal'
							}
					},
					series: [{
							name: 'John',
							data: [5, 3, 4, 7, 2]
					}, {
							name: 'Jane',
							data: [2, 2, 3, 2, 1]
					}, {
							name: 'Joe',
							data: [3, 4, 4, 2, 5]
					}]
				});

				$timeout(function() {
					_year2015.reflow();
				}, 1000);

				// $rootScope.$on('avgDayGender', function(e, data){
				// 	avgDayGenderChart(data);
				// 	e.stopPropagation();
				// });

				// function avgDayGenderChart(data) {
				// 	var AxisTitle = "Promedio de pago";
					
				// 	Highcharts.chart(element[0], {
				// 		chart: {
				// 			zoomType: 'x'
				// 		 },
				// 		 title: {
				// 				 text: 'Total y Generos'
				// 		 },
				// 		 subtitle: {
				// 			text: document.ontouchstart === undefined ?
				// 			'Clic y arrastrar para hacer zoom' : 'Clic para hacer zoom'
				// 		 },
				// 		 xAxis: {
				// 			type: 'datetime',
				// 			minRange: 14 * 24 * 3600000 // fourteen days
				// 		 },
				// 		 yAxis: {
				// 			title: {
				// 				text: AxisTitle
				// 			},
				// 			minRange:0.1,
				// 			min:0
				// 		 },
				// 		 legend: {
				// 			enabled: true
				// 		 },
				// 		 plotOptions: {
				// 			area: {
				// 				fillColor: {
				// 					linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				// 					stops: [
				// 						[0, Highcharts.getOptions().colors[0]],
				// 						[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
				// 					]
				// 				},
				// 				marker: {
				// 					radius: 2
				// 				},
				// 				lineWidth: 1,
				// 				states: {
				// 					hover: {
				// 						lineWidth: 1
				// 					}
				// 				},
				// 				threshold: null
				// 			}
				// 		},
				// 		series: [
				// 			{
				// 				type: 'area',
				// 				name: 'Por día',
				// 				pointInterval: 24 * 3600 * 1000,
				// 				pointStart: Date.UTC(2013, 10, 1),
				// 				data: data[0]
				// 			}, {
				// 				name: 'Genero femenino',
				// 				pointInterval: 24 * 3600 * 1000,
				// 				pointStart: Date.UTC(2013, 10, 1),
				// 				data: data[1].female
				// 			} , {
				// 				name: 'Genero masculino',
				// 				pointInterval: 24 * 3600 * 1000,
				// 				pointStart: Date.UTC(2013, 10, 1),
				// 				data: data[1].male
				// 			}
				// 		],
				// 	});
				// }
				
			}
		};
	}

	Year2015Ctrl.$inject = ['_','$rootScope', '$timeout'];
	angular.module('ipm').directive('year2015', Year2015Ctrl);
})();
