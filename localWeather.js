/* geolocation object found,therefore "on: */
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude
    var lon =  position.coords.longitude
     
    $("#test").html(lat + "<br> " + lon)
     var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=d4f60eb2532513f355faa230c60aa22b"
    $.getJSON(url, function(weather){
              var celcius = (weather.main["temp"] - 273.15).toFixed(1);
              var fahrenheit = (celcius*(9/5)+32).toFixed(1);
             
			  $("#temp").html(celcius + "&deg;C");
              $("#location").html(weather["name"]);
			  $("#country").html(weather.sys["country"]);
              $("#description").html("<img src='http://openweathermap.org/img/w/"+(weather.weather[0]["icon"])+".png' />");
              
			function checkDisabled(evt) {
				var val = $("input[name=unit]:checked").val();
				if (val == 'C') {
					 $("#temp").html(celcius + "&deg;C");
				} else {
					$("#temp").html(fahrenheit + "&deg;F");
				}
			}

			$('input[name=unit]:radio').change(checkDisabled);

			checkDisabled();
			
      function changeBackground(t) {
				if (t > 33) {
					$("body").css("background","linear-gradient(to bottom right,#990000,#996600,#990000)");
				} else if (t > 27) {
					$("body").css("background","linear-gradient(to bottom right,#ff3300,#ffcc00,#ff3300)");
				} else if (t > 20) {
					$("body").css("background","linear-gradient(to bottom right,#006600,#CCCC00,#006600)");
				} else if (t > 10) {
					$("body").css("background","linear-gradient(to bottom right,#3366CC,#66FFFF,#3366CC)");
				} else {
					$("body").css("background","linear-gradient(to bottom right,#66ccff,#ccffff,#66ccff)");
				}
			};
			
			changeBackground(celcius);
    });

  
  
  });



}
  
