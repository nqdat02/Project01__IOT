// var data = [];
// var lastDate = new Date('19 Jun 2017');
// var options = {
// 	series: [
// 		{
// 		data: data.slice(),
// 		},
// 	],

// 	chart: {
// 		id: "realtime",
// 		height: 350,
// 		type: "line",
// 		animations: {
// 			enabled: true,
// 			easing: "linear",
// 			dynamicAnimation: {
// 				speed: 1000,
// 			},
// 		},

// 		toolbar: {
// 			show: false,
// 		},

// 		zoom: {
// 			enabled: false,
// 		},
// 	},

// 	dataLabels: {
// 		enabled: false,
// 	},

// 	stroke: {
// 		curve: "smooth",
// 	},

// 	title: {
// 		text: "Dynamic Updating Chart",
// 		align: "left",
// 	},

// 	markers: {
// 		size: 0,
// 	},

// 	xaxis: {
// 		type: "datetime",
// 		// range: XAXISRANGE,
// 		min: new Date('19 Jun 2017').getTime(),
// 		max: new Date('14 Aug 2017').getTime(),
// 	},

// 	yaxis: {
// 		max: 100,
// 	},

// 	legend: {
// 		show: false,
// 	},
// };

// var chart = new ApexCharts(document.querySelector("#myChart"), options);
// chart.render();

// window.setInterval(function () {
// 	getNewSeries(lastDate, {
// 		min: 10,
// 		max: 90,
// 	}
// 	);

// 	chart.updateSeries([
// 		{
// 		data: data,
// 		},
// 	]
//   );
// }, 1000);
// function getNewSeries(baseval, yrange) {
// 	var newDate = baseval + 2000;
// 	lastDate = newDate;
// 	data.push({
// 		x: newDate,
// 		y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
// 	});
// }

const chart_colors = {
	temperature_color: '#E15D1F',
	humidity_color: '#1FC7E1',
	luminosity_color: '#ECEE4F',
};

const warning_color = {
	high: '#cc3300',
	moderate: '#ff9966',
	low: '#ffcc00',
	no: '#339900',
};

var data = {
	labels: [0],
	datasets: [
		// temperature data
		{
			label: "Temperature",
			data: [0],
			borderColor: chart_colors.temperature_color,
			// backgroundColor: chart_colors.temperature_color,
			lineTension: 0.5,
		},
		
		// humidity data
		{
			label: "Humidity",
			data: [0],
			borderColor: chart_colors.humidity_color,
			// backgroundColor: chart_colors.humidity_color,
			lineTension: 0.5,
		},

		// 
		{
			label: "Luminosity",
			data: [0],
			borderColor: chart_colors.luminosity_color,
			// backgroundColor: chart_colors.luminosity_color,
			lineTension: 0.5,
		},


	],
};

const config = {
	type: "line",
	data: data,
};

var myChart = new Chart(document.getElementById("myChart"), config);
myChart.canvas.parentNode.style.height = '400px';
myChart.canvas.parentNode.style.width = '1200px';

window.setInterval(myCallback, 2000);

function myCallback() {
	let now = new Date();
	let temperature_value = Math.floor(Math.random() * 100);
	let humidity_value = Math.floor(Math.random() * 100);
	let luminosity_value = Math.floor(Math.random() * 200);


	now = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" +  ("0" + now.getSeconds()).slice(-2);
	// normal format
	// now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	

	if (data.labels.length > 15) {
		data.labels.shift();
		data.datasets[0].data.shift();
		data.datasets[1].data.shift();
		data.datasets[2].data.shift();
	}
	data.labels.push(now);
	data.datasets[0].data.push(temperature_value);
	data.datasets[1].data.push(humidity_value);
	data.datasets[2].data.push(luminosity_value);
	myChart.update();

	// document.getElementById("currentValue").innerHTML = 'Current Temparature at ' + now + ' - ' + temperature_value;
	document.getElementById("current_temperature").innerHTML = temperature_value + '°C';
	document.getElementById("current_humidity").innerHTML = humidity_value + '%';
	document.getElementById("current_luminosity").innerHTML = luminosity_value + 'Lux';

}

const btn_light = document.querySelector('#btn-light .switch input');
const btn_fan = document.querySelector('#btn-fan .switch input');

btn_light.addEventListener('change', function() {
	if (this.checked) {
		console.log('Light is on');
		document.querySelector('#btn-light p').innerHTML = 'ON';
		document.getElementById('btn-light-off').style.display = 'none';
		document.getElementById('btn-light-on').style.display = 'block';
	} else {
		console.log('Light is off');
		document.querySelector('#btn-light p').innerHTML = 'OFF';
		document.getElementById('btn-light-off').style.display = 'block';
		document.getElementById('btn-light-on').style.display = 'none';	
	}
});

btn_fan.addEventListener('change', function() {
	if (this.checked) {
		console.log('Fan is on');
		document.querySelector('#btn-fan p').innerHTML = 'ON';
		document.getElementById('btn-fan-off').style.display = 'none';
		document.getElementById('btn-fan-on').style.display = 'block';
	} else {
		console.log('Fan is off');
		document.querySelector('#btn-fan p').innerHTML = 'OFF';
		document.getElementById('btn-fan-off').style.display = 'block';
		document.getElementById('btn-fan-on').style.display = 'none';
	}
});