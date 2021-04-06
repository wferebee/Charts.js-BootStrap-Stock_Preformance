





function yearData(response){

    var highArr = [];
	var lowArr = [];
	var openArr = [];
	var closeArr = []
	var dateArr = [];



	for (var i = 0; i < response.prices.length; i++) { 
		openArr.push(Math.round((response.prices[i].open)));
		closeArr.push(Math.round((response.prices[i].close)));
		highArr.push(Math.round((response.prices[i].high)));
		lowArr.push(Math.round((response.prices[i].low)));
	}

	//console.log(highArr);

	for (var k = 0; k < openArr.length; k++) {

		var a = new Date(response.prices[k].date * 1000);
		var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();

		var time = month + '/' + date + '/' + (year - 2000);
		dateArr.unshift(time);
		//console.log(time)
	}

	//console.log(dateArr);

	var ctx = document.getElementById('myChartYear').getContext('2d');
	var chart = new Chart(ctx, {

		type: 'line',
		data: {
			labels: dateArr,
			datasets: [{
					label: 'Open Price $',
					fill: false,
					backgroundColor: 'rgb(223, 255, 0)',
					borderColor: 'rgb(223, 255, 0)',
					data: openArr
				},
				{
					label: 'Close Price $',
					fill: false,
					backgroundColor: 'rgb(100, 149, 237)',
					borderColor: 'rgb(100, 149, 237)',
					data: closeArr
				},
				{
					label: 'Highest Price $',
					fill: false,
					backgroundColor: 'rgb(159, 226, 191)',
					borderColor: 'rgb(159, 226, 191)',
					data: highArr
				},
				{
					label: 'Lowest $',
					fill: false,
					backgroundColor: 'rgb(2222, 49, 99)',
					borderColor: 'rgb(222, 49, 99)',
					data: lowArr
				}
			]
		},
		options: {
			responsive: true,
			maintainAspectRatio: true,
            title: {
                display: true,
                text: 'Last Year: TESLA'},
			elements: {
				line: {
					tension: 0
				}
			}
		}
	});

}


