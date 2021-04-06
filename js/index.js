

$(document).ready(function () {


	

	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=TSLA&region=US",
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "7a664664b9msh9ab60b50670f375p1962c5jsncba19bed257a",
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
		}
	};




	$.ajax(settings).done(function (response) {
		//console.log(response);


		oneDayData(response);
		tenDayData(response);
		yearData(response);






	});






});