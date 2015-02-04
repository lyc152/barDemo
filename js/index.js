//条形堆叠图

$(document).ready(function () {
    var data = {
    	name:	
			['<div>鞋</div><br/><i style="color: #ff7200;">★</i><i style="color: #ff7200;">★</i>', 
			 '<div>首饰</div><br/><i style="color: #ff7200;">★</i>', 
			 '<div><i style="color: red;">服装</i></div><br/>'],
		value: [8, 12, 80]
    };

	getData('demo', data);
	function getData(divId, data) {
	    new Highcharts.Chart({
	        chart: {
	            type: 'bar',
	            backgroundColor: '#f2f4fa',
	            renderTo: divId,
	            marginRight: 50
	        },
	        title: {
	            text: '条形堆叠图',
	            style: {
	                color: '#333333',
	                fontWeight: 'bold'
	            }

	        },
	        xAxis: {
	            categories: data.name,
	            title: {
	                text: null
	            },
	            labels: {
	                style: {
	                    fontSize: '13px',
	                    fontFamily: 'Verdana, sans-serif',
	                    margin: 10
	                }
	            }
	        },
	        yAxis: {
	            min: 0,
	            max: 100,
	            labels: { overflow: 'justify' },
	            title: {
	                text: '占比 (%)',
	                align: 'high'
	            }
	        },
	        plotOptions: {
	            bar: {
	                dataLabels: {
	                    enabled: true,
	                    format: '{y}' + '%'
	                }
	            }
	        },
	        exporting: {
	            enabled: false
	        },
	        legend: {
	            enabled: false
	        },
	        credits: {
	            enabled: false
	        },
	        tooltip: {
	            enabled: false
	        },
	        series: [
	            {
	                name: '占比',
	                data: data.value,
	                color: '#a2dcfb',
	                dataLabels: {
	                    enabled: true,
	                    align: 'left',
	                    x: 3,
	                    verticalAlign: 'middle',
	                    overflow: true,
	                    crop: false,
	                    style: {
	                        fontSize: '13px',
	                        margin: '20px',
	                        fontFamily: 'Verdana, sans-serif'
	                    }
	                }
	            }
	        ]
	    });
    }
});