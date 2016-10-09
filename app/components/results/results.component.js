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
	        categories: ['2011', '2012', '2013', '2014', '2014']
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
	        spacingTop: 0,
	        spacingLeft: 25,
	        spacingRight: 25,
	    },
	    title: {
	        text: 'Stacked column chart'
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
	    tooltip: {
	        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
	        shared: true
	    },
	    plotOptions: {
	        column: {
	            stacking: 'percent'
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

		Highcharts.chart({
	    chart: {
	        type: 'line',
	        renderTo: chartThree[0],
	        spacingBottom: 0,
	        spacingTop: 0,
	        spacingLeft: 25,
	        spacingRight: 25,
	    },
	    title: {
	        text: 'Monthly Average Temperature'
	    },
	    subtitle: {
	        text: 'Source: WorldClimate.com'
	    },
	    xAxis: {
	        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	    },
	    yAxis: {
	        title: {
	            text: 'Temperature (°C)'
	        }
	    },
	    plotOptions: {
	        line: {
	            dataLabels: {
	                enabled: true
	            },
	            enableMouseTracking: false
	        }
	    },
	    series: [{
	        name: 'Tokyo',
	        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	    }, {
	        name: 'London',
	        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	    }]
	  });

		Highcharts.chart({
	    chart: {
	        type: 'line',
	        renderTo: chartFour[0],
	        spacingBottom: 0,
	        spacingTop: 0,
	        spacingLeft: 25,
	        spacingRight: 25,
	    },
	    title: {
	        text: 'Monthly Average Temperature'
	    },
	    subtitle: {
	        text: 'Source: WorldClimate.com'
	    },
	    xAxis: {
	        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	    },
	    yAxis: {
	        title: {
	            text: 'Temperature (°C)'
	        }
	    },
	    plotOptions: {
	        line: {
	            dataLabels: {
	                enabled: true
	            },
	            enableMouseTracking: false
	        }
	    },
	    series: [{
	        name: 'Tokyo',
	        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	    }, {
	        name: 'London',
	        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	    }]
	  });

		Highcharts.chart({
	    chart: {
	        type: 'bar',
	        renderTo: chartFive[0]
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


	}
	
	angular
	.module('ipm')
	.component('results', results);
	ResultsCtrl.$inject = ["$window", "$timeout", "$location", "$element", "$attrs"];

})();