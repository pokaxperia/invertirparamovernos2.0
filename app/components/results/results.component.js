(function(){
	/**
	*  Landing Directive
	*/
	'use strict';

	var results = {
		templateUrl: './components/results/results.html', 
		controller: ResultsCtrl,
		replace:true,
		bindings: {
			testing: '@?bind'
		}
	};

	var chartOne = null;
	var chartTwo = null;
	var chartThree = null;
	var chartFour = null;
	var chartFive = null;
	var chartSixOne = null;
	var chartSixTwo = null;
	var chartSixThree = null;
	var chartSixFour = null;
	var chartSixFive = null;
	var chartSevenOne = null;
	var chartSevenTwo = null;
	var chartSevenThree = null;
	var chartSevenFour = null;
	var chartSevenFive = null;


	function ResultsCtrl(_, $window, $timeout, $location, $element, $attrs, modalService){
		var relt = this;

		chartOne = angular.element(document.getElementById('chartOne'));
		chartTwo = angular.element(document.getElementById('chartTwo'));
		chartThree = angular.element(document.getElementById('chartThree'));
		chartFour = angular.element(document.getElementById('chartFour'));
		chartFive = angular.element(document.getElementById('chartFive'));
		chartSixOne = angular.element(document.getElementById('chartSix__one'));
		chartSixTwo = angular.element(document.getElementById('chartSix__two'));
		chartSixThree = angular.element(document.getElementById('chartSix__three'));
		chartSixFour = angular.element(document.getElementById('chartSix__four'));
		chartSixFive = angular.element(document.getElementById('chartSix__five'));

		chartSevenOne = angular.element(document.getElementById('chartSeven__one'));
		chartSevenTwo = angular.element(document.getElementById('chartSeven__two'));
		chartSevenThree = angular.element(document.getElementById('chartSeven__three'));
		chartSevenFour = angular.element(document.getElementById('chartSeven__four'));
		chartSevenFive = angular.element(document.getElementById('chartSeven__five'));

		Highcharts.chart({
			chart: {
					type: 'column',
					renderTo: chartOne[0],
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 600
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
							text: 'Porcentajes'
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
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 600
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
							text: 'Porcentajes'
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
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 600
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
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 600
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
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 500
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
							 text: 'Porcentajes'
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
			 },
			 {
 					 name: 'Viajes a la escuela',
 					 data: [32, 43, 13]
 			 },{
					 name: 'Inversión',
					 data: [0, 13, 87]
			 }]
		});

		/* Graphic Six */
		Highcharts.chart({
				chart: {
					type: 'bar',
					renderTo: chartSixOne[0],
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 1000
				},
				title: {
						text: '2011'
				},
				tooltip: {
						pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
						shared: true
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
						data: [52,100,76,80,78,86,70,83,47,83,87,54,52,80,48,66,61,67,91,50,51,65,87,72,73,64,86,7,80,76,66,72,35,63,67,70,83,48,76,83,57,85,61,74,98,78,85,92,49,80,75,66,71,65,71,85,61,63,74]
					},
					{
						name: 'Movilidad',
						data: [48, 0, 24, 20, 22, 14, 30, 17, 53, 17, 13, 46, 48, 20, 52, 34, 39, 33, 9, 50, 49, 35, 13, 28, 27, 36, 14, 93, 20, 24, 34, 28, 65, 37, 33, 30, 17, 52, 24, 17, 43, 15, 39, 26, 2, 22, 15, 8, 51, 20, 25, 34, 29, 35, 29, 15, 39, 37, 26]
					}
				]
		});

		Highcharts.chart({
				chart: {
					type: 'bar',
					renderTo: chartSixTwo[0],
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 1000
				},
				title: {
						text: '2012'
				},
				tooltip: {
						pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
						shared: true
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
						data: [73,90,72,31,78,82,48,76,40,83,85,60,56,83,34,41,64,66,88,49,22,62,75,81,73,79,61,40,73,74,51,76,41,0,67,74,65,49,70,75,68,91,75,65,87,50,85,75,59,79,71,72,55,77,86,91,66,70,85]
					},
					{
						name: 'Movilidad',
						data: [27,10,28,69,22,18,52,24,60,17,15,40,44,17,66,59,36,34,12,51,78,38,25,19,27,21,39,60,27,26,49,24,59,100,33,26,35,51,30,25,32,9,25,35,13,50,15,25,41,21,29,28,45,23,14,9,34,30,15]
					}
				]
		});

		Highcharts.chart({
			chart: {
				type: 'bar',
				renderTo: chartSixThree[0],
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1000
			},
			title: {
					text: '2013'
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
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
					data: [65,81,47,69,40,48,85,65,46,40,76,52,60,68,40,26,51,82,83,54,93,9,71,43,66,59,53,99,74,70,43,61,48,31,62,77,67,48,54,62,78,95,66,67,75,59,51,58,40,71,69,59,83,70,80,85,32,67,47]
				},
				{
					name: 'Movilidad',
					data: [35,19,53,31,60,52,15,35,54,60,24,48,40,32,60,74,49,18,17,46,7,91,29,57,34,41,47,1,26,30,57,39,52,69,38,23,33,52,46,38,22,5,34,33,25,41,49,42,60,29,31,41,17,30,20,15,68,33,53]
				}
			]
		});

		Highcharts.chart({
			chart: {
				type: 'bar',
				renderTo: chartSixFour[0],
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1000
			},
			title: {
					text: '2014'
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
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
					data: [45,79,42,56,29,48,85,73,54,80,80,55,92,80,29,80,28,41,74,37,72,24,35,44,47,70,54,87,91,42,62,80,36,96,41,24,54,50,23,68,49,69,94,90,39,74,85,46,59,74,58,63,75,70,81,75,64,69,84]
				},
				{
					name: 'Movilidad',
					data: [55,21,58,44,71,52,15,27,46,20,20,45,8,20,71,20,72,59,26,63,28,76,65,56,53,30,46,13,9,58,38,20,64,4,59,76,46,50,77,32,51,31,6,10,61,26,15,54,41,26,42,37,25,30,19,25,36,31,16]
				}
			]
		});

		Highcharts.chart({
			chart: {
				type: 'bar',
				renderTo: chartSixFive[0],
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1000
			},
			title: {
					text: '2015'
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
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
					data: [100,90,65,64,37,79,74,71,70,71,80,72,48,87,54,82,41,65,96,58,65,69,69,67,100,67,70,100,71,72,100,67,54,89,70,63,100,81,49,100,70,90,79,78,62,80,92,61,78,72,75,91,80,74,89,74,71,50,49]
				},
				{
					name: 'Movilidad',
					data: [0,10,35,36,63,21,26,29,30,29,20,28,52,13,46,18,59,35,4,42,35,31,31,33,0,33,30,0,29,28,0,33,46,11,30,37,0,19,51,0,30,10,21,22,38,20,8,39,22,28,25,9,20,26,11,26,29,50,51]
				}
			]
		});

		/* Graphic Seven */
		Highcharts.chart({
				chart: {
					type: 'bar',
					renderTo: chartSevenOne[0],
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 1000
				},
				title: {
						text: '2015'
				},
				tooltip: {
						pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
						shared: true
				},
				xAxis: {
						categories: [
							'Acapulco',
							'Acayucan',
							'Aguascalientes',
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
							'San Luis Potosí',
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
						name: 'Auto',
						data: [97,100,90,86,93,87,88,78,82,98,89,84,92,98,99,81,99,73,34,81,100,97,83,73,71,78,60,3,85,92,40,78,82,34,84,61,100,96,88,84,73,21,78,98,91,100,79,96,46,87,91,88,99,78,39,57,92,89,90]
					},
					{
						name: 'MUS',
						data: [3,0,10,14,7,13,12,22,18,2,11,16,8,2,1,19,1,27,66,19,0,3,17,27,29,22,40,97,15,8,60,22,18,66,16,39,0,4,12,16,27,79,22,2,9,0,21,4,54,13,9,12,1,22,61,43,8,11,10]
					}
				]
		});

		Highcharts.chart({
				chart: {
					type: 'bar',
					renderTo: chartSevenTwo[0],
					spacingBottom: 25,
					spacingTop: 50,
					spacingLeft: 25,
					spacingRight: 25,
					height: 1000
				},
				title: {
						text: '2012'
				},
				tooltip: {
						pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
						shared: true
				},
				xAxis: {
					categories: [
						'Acapulco',
						'Acayucan',
						'Aguascalientes',
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
						'San Luis Potosí',
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
						name: 'Auto',
						data: [90,100,85,90,90,93,44,73,93,80,88,95,89,96,96,86,93,76,41,96,88,95,92,71,82,56,87,98,81,78,58,63,73,31,79,51,98,86,87,67,70,3,60,86,97,97,93,76,55,95,91,92,97,51,21,68,54,57,100]
					},
					{
						name: 'MUS',
						data: [10,0,15,10,10,7,56,27,7,20,12,5,11,4,4,14,7,24,59,4,12,5,8,29,18,44,13,2,19,22,42,37,27,69,21,49,2,14,13,33,30,97,40,14,3,3,7,24,45,5,9,8,3,49,79,32,46,43,0]
					}
				]
		});

		Highcharts.chart({
			chart: {
				type: 'bar',
				renderTo: chartSevenThree[0],
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1000
			},
			title: {
					text: '2013'
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
			},
			xAxis: {
				categories: [
					'Acapulco',
					'Acayucan',
					'Aguascalientes',
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
					'San Luis Potosí',
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
					name: 'Auto',
					data: [60,67,65,94,92,81,78,69,84,94,87,81,96,81,89,100,98,97,72,73,100,100,81,86,78,55,95,66,61,74,50,89,81,100,82,84,96,84,96,91,88,73,91,100,89,97,86,80,93,83,88,87,91,45,100,67,86,97,91]
				},
				{
					name: 'MUS',
					data: [40,33,35,6,8,19,22,31,16,6,13,19,4,19,11,0,2,3,28,27,0,0,19,14,22,45,5,34,39,26,50,11,19,0,18,16,4,16,4,9,12,27,9,0,11,3,14,20,7,17,12,13,9,55,0,33,14,3,9]
				}
			]
		});

		Highcharts.chart({
			chart: {
				type: 'bar',
				renderTo: chartSevenFour[0],
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1000
			},
			title: {
					text: '2014'
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
			},
			xAxis: {
				categories: [
					'Acapulco',
					'Acayucan',
					'Aguascalientes',
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
					'San Luis Potosí',
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
					name: 'Auto',
					data: [98,95,81,17,96,86,93,54,82,92,95,84,100,100,92,100,99,98,33,83,97,100,46,95,90,90,96,0,98,97,38,87,93,100,93,95,82,96,98,77,98,70,100,100,93,91,89,81,96,92,88,95,94,59,100,88,96,87,97]
				},
				{
					name: 'MUS',
					data: [2,5,19,83,4,14,7,46,18,8,5,16,0,0,8,0,1,2,67,17,3,0,54,5,10,10,4,100,2,3,62,13,7,0,7,5,18,4,2,23,2,30,0,0,7,9,11,19,4,8,12,5,6,41,0,12,4,13,3]
				}
			]
		});

		Highcharts.chart({
			chart: {
				type: 'bar',
				renderTo: chartSevenFive[0],
				spacingBottom: 25,
				spacingTop: 50,
				spacingLeft: 25,
				spacingRight: 25,
				height: 1000
			},
			title: {
					text: '2015'
			},
			tooltip: {
					pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
					shared: true
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
					name: 'Auto',
					data: [41,54,89,70,72,100,49,100,58,100,62,70,78,78,90,80,74,74,92,87,100,50,100,90,75,81,100,67,79,49,72,61,65,71,89,80,74,82,70,80,72,71,48,54,79,37,64,91,63,69,69,65,67,65,70,71,67,96,71]
				},
				{
					name: 'MUS',
					data: [59,46,11,30,28,0,51,0,42,0,38,30,22,22,10,20,26,26,8,13,0,50,0,10,25,19,0,33,21,51,28,39,35,29,11,20,26,18,30,20,28,29,52,46,21,63,36,9,37,31,31,35,33,35,30,29,33,4,29]
				}
			]
		});

		relt.slickGraphicSixConfig = {
			enabled: true,
			autoplay: true,
			customPaging : function(slider, i) {
				var years = [2011,2012,2013,2014,2015];
				return '<a>'+years[i]+'</a>';
			},
			autoplaySpeed: 5000,
			draggable: false,
			infinite:true,
			pauseOnHover: true,
			dots: true,
			arrows:true,
			nextArrow: '<button class="custom-next-button"><i class="ipm-next"></i></button>',
			prevArrow: '<button class="custom-prev-button"><i class="ipm-previous"></i></button>',
			method: {},
			event: {
				init: function(){
					
				}
			}
		};

		relt.slickGraphicSevenConfig = {
			enabled: true,
			autoplay: true,
			customPaging : function(slider, i) {
				var years = [2011,2012,2013,2014,2015];
				return '<a>'+years[i]+'</a>';
			},
			autoplaySpeed: 5000,
			draggable: false,
			infinite:true,
			pauseOnHover: true,
			dots: true,
			arrows:true,
			nextArrow: '<button class="custom-next-button"><i class="ipm-next"></i></button>',
			prevArrow: '<button class="custom-prev-button"><i class="ipm-previous"></i></button>',
			method: {},
			event: {
				init: function(){
					
				}
			}
		};
		
		var cities = [
			{'id': 1, 'city':'Aguascalientes', "otros": 48, "movilidad": 52},
			{'id': 2, 'city':'Acapulco', "otros": 0, "movilidad": 100},
			{'id': 3, 'city':'Acayucan', "otros": 24, "movilidad": 76},
			{'id': 4, 'city':'Cancún', "otros": 20, "movilidad": 80},
			{'id': 5, 'city':'Celaya', "otros": 22, "movilidad": 78},
			{'id': 6, 'city':'Chihuahua', "otros": 14, "movilidad": 86},
			{'id': 7, 'city':'Coatzacoalcos', "otros": 30, "movilidad": 70},
			{'id': 8, 'city':'Colima-Villa de Álvarez', "otros": 17, "movilidad": 83},
			{'id': 9, 'city':'Córdoba', "otros": 53, "movilidad": 47},
			{'id': 10, 'city':'Coyuca de Benítez', "otros": 17, "movilidad": 83},
			{'id': 11, 'city':'Cuautla', "otros": 13, "movilidad": 87},
			{'id': 12, 'city':'Cuernavaca', "otros": 46, "movilidad": 54},
			{'id': 13, 'city':'Guadalajara', "otros": 48, "movilidad": 52},
			{'id': 14, 'city':'Guaymas', "otros": 20, "movilidad": 80},
			{'id': 15, 'city':'Juárez', "otros": 52, "movilidad": 48},
			{'id': 16, 'city':'La Laguna', "otros": 34, "movilidad": 66},
			{'id': 17, 'city':'La Piedad-Pénjamo', "otros": 39, "movilidad": 61},
			{'id': 18, 'city':'León', "otros": 33, "movilidad": 67},
			{'id': 19, 'city':'Matamoros', "otros": 9, "movilidad": 91},
			{'id': 20, 'city':'Mérida', "otros": 50, "movilidad": 50},
			{'id': 21, 'city':'Mexicali', "otros": 49, "movilidad": 51},
			{'id': 22, 'city':'Minatitlán', "otros": 35, "movilidad": 65},
			{'id': 23, 'city':'Monclova-Frontera', "otros": 13, "movilidad": 87},
			{'id': 24, 'city':'Monterrey', "otros": 28, "movilidad": 72},
			{'id': 25, 'city':'Morelia', "otros": 27, "movilidad": 73},
			{'id': 26, 'city':'Moroleón-Uriangato', "otros": 36, "movilidad": 64},
			{'id': 27, 'city':'Nuevo Laredo', "otros": 14, "movilidad": 86},
			{'id': 28, 'city':'Oaxaca', "otros": 93, "movilidad": 7},
			{'id': 29, 'city':'Ocotlán', "otros": 20, "movilidad": 80},
			{'id': 30, 'city':'Orizaba', "otros": 24, "movilidad": 76},
			{'id': 31, 'city':'Pachuca', "otros": 34, "movilidad": 66},
			{'id': 32, 'city':'Poza Rica', "otros": 28, "movilidad": 72},
			{'id': 33, 'city':'Puebla-Tlaxcala', "otros": 65, "movilidad": 35},
			{'id': 34, 'city':'Puerto Vallarta', "otros": 37, "movilidad": 63},
			{'id': 35, 'city':'Querétaro', "otros": 33, "movilidad": 67},
			{'id': 36, 'city':'Reynosa-Río Bravo', "otros": 30, "movilidad": 70},
			{'id': 37, 'city':'Rioverde-Ciudad Fernández', "otros": 17, "movilidad": 83},
			{'id': 38, 'city':'Saltillo', "otros": 52, "movilidad": 48},
			{'id': 39, 'city':'San Francisco del Rincón', "otros": 24, "movilidad": 76},
			{'id': 40, 'city':'San Luis Potosí-Soledad de Graciano Sánchez', "otros": 17, "movilidad": 83},
			{'id': 41, 'city':'Tampico', "otros": 43, "movilidad": 57},
			{'id': 42, 'city':'Tecomán', "otros": 15, "movilidad": 85},
			{'id': 43, 'city':'Tehuacán', "otros": 39, "movilidad": 61},
			{'id': 44, 'city':'Tehuantepec', "otros": 26, "movilidad": 74},
			{'id': 45, 'city':'Tepic', "otros": 2, "movilidad": 98},
			{'id': 46, 'city':'Teziutlán', "otros": 22, "movilidad": 78},
			{'id': 47, 'city':'Tianguistenco', "otros": 15, "movilidad": 85},
			{'id': 48, 'city':'TIJUANA', "otros": 8, "movilidad": 92},
			{'id': 49, 'city':'Tlaxcala-Apizaco', "otros": 51, "movilidad": 49},
			{'id': 50, 'city':'Toluca', "otros": 20, "movilidad": 80},
			{'id': 51, 'city':'Tula', "otros": 25, "movilidad": 75},
			{'id': 52, 'city':'Tulancingo', "otros": 34, "movilidad": 66},
			{'id': 53, 'city':'Tuxtla Gutiérrez', "otros": 29, "movilidad": 71},
			{'id': 54, 'city':'Valle de México', "otros": 35, "movilidad": 65},
			{'id': 55, 'city':'Veracruz', "otros": 29, "movilidad": 71},
			{'id': 56, 'city':'Villahermosa', "otros": 15, "movilidad": 85},
			{'id': 57, 'city':'Xalapa', "otros": 39, "movilidad": 61},
			{'id': 58, 'city':'Zacatecas-Guadalupe', "otros": 37, "movilidad": 63},
			{'id': 59, 'city':'Zamora-Jacona', "otros": 26, "movilidad": 74}	
		];

		relt.showGraphicCity = function(){
			relt.testing = "prueba";
			modalService.showModal('ak-modal');
		}

	}
	
	angular
	.module('ipm')
	.component('results', results);
	ResultsCtrl.$inject = ["_","$window", "$timeout", "$location", "$element", "$attrs", "modalService"];

})();