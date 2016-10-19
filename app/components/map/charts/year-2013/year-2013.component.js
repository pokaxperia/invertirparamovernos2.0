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
					console.log(data)
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
							type: 'column',
							renderTo: element[0],
							height: 550
						},
						title: {
								text: 'Viajes a la escuela'
						},
						// tooltip: {
						// 		pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.0f}%</b><br/>',
						// },
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
	  		        data: [[data.ea]],
		            name: '1'
			        },{
		            data: [[data.eb]],
		            name: '2'
			        },{
		            data: [[data.ec]],
		            name: '3'
			        },{
		            data: [[data.ed]],
		            name: '4'
			        },{
		            data: [[data.ee]],
		            name: '5'
    	        },{
                data: [[data.ef]],
                name: '6'
    	        },{
                data: [[data.eg]],
                name: '6'
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
