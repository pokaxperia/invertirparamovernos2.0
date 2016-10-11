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
            type: 'bar',
            renderTo: chartFive[0],
          	spacingBottom: 0,
          	spacingTop: 10,
          	spacingLeft: 5,
          	spacingRight: 15,
          	height: 1500
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: [
            'Aguascalientes',
            'Acapulco',
            'Acayucan',
            'Cancún',
            'Celaya',
            'Chihuahua',
            'Coatzacoalcos',
            'Colima-Villa de Álvarez',
            'Córdoba',
            'Coyuca de Benítez',
            'Cuautla',
            'Cuernavaca',
            'Guadalajara',
            'Guaymas',
            'Juárez',
            'La Laguna',
            'La Piedad-Pénjamo',
            'León',
            'Matamoros',
            'Mérida',
            'Mexicali',
            'Minatitlán',
            'Monclova-Frontera',
            'Monterrey',
            'Morelia',
            'Moroleón-Uriangato',
            'Nuevo Laredo',
            'Oaxaca',
            'Ocotlán',
            'Orizaba',
            'Pachuca',
            'Poza Rica',
            'Puebla-Tlaxcala',
            'Puerto Vallarta',
            'Querétaro',
            'Reynosa-Río Bravo',
            'Rioverde-Ciudad Fernández',
            'Saltillo',
            'San Francisco del Rincón',
            'San Luis Potosí-Soledad de Graciano Sánchez',
            'Tampico',
            'Tecomán',
            'Tehuacán',
            'Tehuantepec',
            'Tepic',
            'Teziutlán',
            'Tianguistenco',
            'TIJUANA',
            'Tlaxcala-Apizaco',
            'Toluca',
            'Tula',
            'Tulancingo',
            'Tuxtla Gutiérrez',
            'Valle de México',
            'Veracruz',
            'Villahermosa',
            'Xalapa',
            'Zacatecas-Guadalupe',
            'Zamora-Jacona'
            ]
        },
        yAxis: {
            min: 0,
            max:100,
            title: {
                text: ''
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
        series: [
	        {
	          name: 'Otros',
	          data: [48, 0, 24, 20, 22, 14, 30, 17, 53, 17, 13, 46, 48, 20, 52, 34, 39, 33, 9, 50, 49, 35, 13, 28, 27, 36, 14, 93, 20, 24, 34, 28, 65, 37, 33, 30, 17, 52, 24, 17, 43, 15, 39, 26, 2, 22, 15, 8, 51, 20, 25, 34, 29, 35, 29, 15, 39, 37, 26]
	        },
	        {
	          name: 'Movilidad',
	          data: [52,100,76,80,78,86,70,83,47,83,87,54,52,80,48,66,61,67,91,50,51,65,87,72,73,64,86,7,80,76,66,72,35,63,67,70,83,48,76,83,57,85,61,74,98,78,85,92,49,80,75,66,71,65,71,85,61,63,74]
	        }
        ]
		});


	}
	
	angular
	.module('ipm')
	.component('results', results);
	ResultsCtrl.$inject = ["$window", "$timeout", "$location", "$element", "$attrs"];

})();