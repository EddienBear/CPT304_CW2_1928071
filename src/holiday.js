const settings = {
    "async": true,
	"crossDomain": true,
	"url": "https://public-holiday.p.rapidapi.com/",
	"dataType": 'JSON',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "2d55c09101msh7fe549476fd9210p129072jsn309a614ed4cf",
		"x-rapidapi-host": "public-holiday.p.rapidapi.com"
    }
}

function fetchHolidays(){
    var countrycode = document.getElementById("CountryCode").value;
    var raw;
    settings.url = "https://public-holiday.p.rapidapi.com/"+ 2023 + "/" + countrycode;
    $.ajax(settings).done(function (response) {
		raw = response;
		var text = JSON.stringify(response,null,4);
		console.log(raw);
		document.getElementById("holidaylist").innerHTML= "holidaylist:\n" + text;
		return text;
    });
}