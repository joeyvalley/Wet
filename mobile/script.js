$(document).ready(function(){

	// SET DATE AND TIME
	var today = new Date();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var date = monthNames[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
	var version_no = 'v0' + (today.getMonth()+1) + '.' + today.getYear();
	
	
	document.getElementById("date").innerHTML = date;

	setInterval( function() {
		var seconds = new Date().getSeconds();
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);

	setInterval( function() {
		var minutes = new Date().getMinutes();
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	},1000);

	setInterval( function() {
		var hours = new Date().getHours();
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	}, 1000);
	
	// ajax test
	
	$.ajax({url: "http://api.openweathermap.org/data/2.5/group?id=5128581&appid=e8e6ce4c8345a8bce704cfa8fc0c8563&units=imperial", success: function(result){
		res = JSON.parse(CreateWeatherJson(result));
		temperature = Math.round(res[0].temp);
		document.getElementById("deg").innerHTML = temperature;
	}});
	
	function CreateWeatherJson(json) {
		var newJson = "";
		for (i = 0; i < json.list.length; i++) {
		cityId = json.list[i].id;
		cityName = json.list[i].name;
		temp = json.list[i].main.temp
		pressure = json.list[i].main.pressure
		humidity = json.list[i].main.humidity
		tempmin = json.list[i].main.temp_min
		tempmax = json.list[i].main.temp_max
		newJson = newJson + "{";
		newJson = newJson + "\"cityId\"" + ": " + cityId + ","
		newJson = newJson + "\"cityName\"" + ": " + "\"" + cityName + "\"" + ","
		newJson = newJson + "\"temp\"" + ": " + temp + ","
		newJson = newJson + "\"pressure\"" + ": " + pressure + ","
		newJson = newJson + "\"humidity\"" + ": " + humidity + ","
		newJson = newJson + "\"tempMin\"" + ": " + tempmin + ","
		newJson = newJson + "\"tempMax\"" + ": " + tempmax
		newJson = newJson + "},";
		}
		return "[" + newJson.slice(0, newJson.length - 1) + "]"
	}
	
	
	// CENTER SPINNER GUY 
	gutter = $( window ).width() - $( "#container" ).width();
	nudge = ((gutter/4)-20).toString() + "px";
	$("#spinny").css("right", nudge);
	
	// IMG HOVER THING
	
	
});