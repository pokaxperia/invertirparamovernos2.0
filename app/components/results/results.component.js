(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	var results = {
		templateUrl: './components/results/results.html', 
		controller: ResultsCtrl,
		replace:true
	};

	var chartOne = null;
	var chartTwo = null;
	var chartThree = null;
	var chartFour = null;
	var chartFive = null;


	function ResultsCtrl($window, $timeout, $location, $element, $attrs){
		var relt = this;

		chartOne = angular.element(document.getElementById('chartOne'));
		chartTwo = angular.element(document.getElementById('chartTwo'));
		chartThree = angular.element(document.getElementById('chartThree'));
		chartFour = angular.element(document.getElementById('chartFour'));
		chartFive = angular.element(document.getElementById('chartFive'));

		Highcharts.chart({
			chart: {
					type: 'column',
					renderTo: chartOne[0],
					spacingBottom: 0,
					spacingTop: 10,
					spacingLeft: 25,
					spacingRight: 25,
			},
			title: {
					text: ''
			},
			xAxis: {
					categories: ['2011', '2012', '2013', '2014', '2015']
			},
			yAxis: {
					min: 0,
					title: {
							text: ''
					}
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
			},
			plotOptions: {
					column: {
							stacking: 'percent'
					}
			},
			series: [{
					name: 'Otros',
					data: [65,	54,	63,	54,	68]
			},{
					name: 'Movilidad',
					data: [35,	46,	37,	46,	32]
			}]
		});

		Highcharts.chart({
			chart: {
					type: 'column',
					renderTo: chartTwo[0],
					spacingBottom: 0,
					spacingTop: 10,
					spacingLeft: 25,
					spacingRight: 25,
			},
			title: {
					text: ''
			},
			xAxis: {
					categories: ['2011', '2012', '2013', '2014', '2015']
			},
			yAxis: {
					min: 0,
					title: {
							text: ''
					}
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
					shared: true
			},
			plotOptions: {
					column: {
							stacking: 'percent'
					}
			},
			series: [

				{
					name: 'Infraestructura Peatonal',
					data: [4, 3, 4, 3, 6]
				},
				{
					name: 'Espacio Público',
					data: [6, 7, 11, 7, 7]
				},
				{
					name: 'Infraestructura Ciclista',
					data: [0, 0, 0, 0, 0]
				},
				{
					name: 'Transporte Público',
					data: [10, 29, 10, 7, 1]
				},
				{
					name: 'Pavimentación',
					data: [32, 34, 34, 27, 35]
				},
				{
					name: 'Infraestructura Vial',
					data: [48, 26, 40, 56, 51]
				}
			]
		});

		Highcharts.chart({
			chart: {
						type: 'area',
						renderTo: chartThree[0],
						spacingBottom: 0,
						spacingTop: 10,
						spacingLeft: 25,
						spacingRight: 25,
				},
				title: {
						text: ''
				},
				subtitle: {
						text: ''
				},
				xAxis: {
						categories: ['2011', '2012', '2013', '2014', '2015'],
						tickmarkPlacement: 'on',
						title: {
								enabled: true,
								text: 'Año'
						}
				},
				yAxis: {
						title: {
								text: 'Millones'
						},
						labels: {
								formatter: function () {
									return this.value/1000 + "M";
								}
						}
				},
				tooltip: {
						split: true,
						valueSuffix: ' millones'
				},
				plotOptions: {
						area: {
								stacking: 'normal',
								lineColor: '#666666',
								lineWidth: 1,
								marker: {
										lineWidth: 1,
										lineColor: '#666666'
								},
								format: '{point.y:.1f}%'
						}
				},
				series: [{
						name: 'Otros',
						data: [69838.03, 53704.75, 43501.24, 35978.96, 36845.53]
				}, {
						name: 'Movilidad',
						data: [38214.89, 46223.97, 25891.65, 31171.16, 17053.72]
				}]
		});

		Highcharts.chart({
			chart: {
						type: 'area',
						renderTo: chartFour[0],
						spacingBottom: 0,
						spacingTop: 10,
						spacingLeft: 25,
						spacingRight: 25,
				},
				title: {
						text: ''
				},
				subtitle: {
						text: ''
				},
				xAxis: {
						categories: ['2011', '2012', '2013', '2014', '2015'],
						tickmarkPlacement: 'on',
						title: {
								enabled: true,
								text: 'Año'
						}
				},
				yAxis: {
						title: {
								text: 'Millones'
						},
						labels: {
								formatter: function () {
									return this.value/1000 + "M";
								}
						}
				},
				tooltip: {
						split: true,
						valueSuffix: ' millones'
				},
				plotOptions: {
						area: {
								stacking: 'normal',
								lineColor: '#666666',
								lineWidth: 1,
								marker: {
										lineWidth: 1,
										lineColor: '#666666'
								},
								format: '{point.y:.1f}%'
						}
				},
				series: [
					{
						name: 'Infraestructura Peatonal',
						data: [1532.16, 1572.34, 1043.97, 824.60, 1011.11]
					},
					{
						name: 'Espacio Público',
						data: [2184.07, 3428.05, 2965.89, 2239.91, 1276.76]
					},
					{
						name: 'Infraestructura Ciclista',
						data: [101.32, 133.65, 64.35, 142.22, 118.12]
					},
					{
						name: 'Transporte Público',
						data: [3927.21, 13653.83, 2641.71, 2233.16, 70.47]
					},
					{
						name: 'Pavimentación',
						data: [12054.99, 16116.62, 8877.96, 8402.31, 5898.17]
					},
					{
						name: 'Infraestructura Vial',
						data: [18415.14, 11951.31, 10297.78, 17328.96, 8679.09]
					}
				]
		});

		Highcharts.chart({
			chart: {
				type: 'column',
				renderTo: chartFive[0],
					spacingBottom: 0,
					spacingTop: 10,
					spacingLeft: 25,
					spacingRight: 25,
				 },
				 title: {
						 text: ''
				 },
				 xAxis: {
						 categories: ['Transporte Público', 'Bicicleta, caminata (espacio público)', 'Automóvil, taxi y otros'],
						 title: {
								 text: null
						 }
				 },
				 yAxis: {
						 min: 0,
						 title: {
								 text: ''
						 },
						 labels: {
								 overflow: 'justify'
						 }
				 },
				 tooltip: {
						 shared: true
				 },

				 series: [{
						 name: 'Viajes al trabajo',
						 data: [45, 24, 31]
				 }, {
						 name: 'Inversión',
						 data: [0, 14, 85]
				 }]
		});


	}
	
	angular
	.module('ipm')
	.component('results', results);
	ResultsCtrl.$inject = ["$window", "$timeout", "$location", "$element", "$attrs"];

})();