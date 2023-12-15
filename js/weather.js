var skycons = new Skycons({ "color": "white" });
var weatherData = {};
var api = "https://api.openweathermap.org/data/2.5/forecast?";
var id = "&APPID=f9d062f6756131fe5182fd6c40b0e99c";
var cnt = "&cnt=4"
var country = "";
var ctyName = "";
var options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
};
var Icons = {
    "01d": {
        icn: Skycons.CLEAR_DAY
    },
    "02d": {
        icn: Skycons.PARTLY_CLOUDY_DAY
    },
    "03d": {
        icn: Skycons.PARTLY_CLOUDY_DAY
    },
    "04d": {
        icn: Skycons.CLOUDY
    },
    "09d": {
        icn: Skycons.RAIN
    },
    "10d": {
        icn: Skycons.RAIN
    },
    "11d": {
        icn: Skycons.SLEET
    },
    "13d": {
        icn: Skycons.SNOW
    },
    "50d": {
        icn: Skycons.FOG
    },
    "01n": {
        icn: Skycons.CLEAR_NIGHT
    },
    "02n": {
        icn: Skycons.PARTLY_CLOUDY_NIGHT
    },
    "03n": {
        icn: Skycons.PARTLY_CLOUDY_NIGHT
    },
    "04n": {
        icn: Skycons.CLOUDY
    },
    "09n": {
        icn: Skycons.RAIN
    },
    "10n": {
        icn: Skycons.RAIN
    },
    "11n": {
        icn: Skycons.SLEET
    },
    "13n": {
        icn: Skycons.SNOW
    },
    "50n": {
        icn: Skycons.FOG
    }
};
var curDate = $(".cur-date");
curDate.html(new Date().toLocaleTimeString('en-US', options));

$.ajax({ url: "https://ipinfo.io/json?" })
    .done(function (res) {
        country = res.country;
        ctyName = "q=" + res.city + "," + country;

        getWeather();
    });


function getWeather() {
    $.ajax({
        url: api + ctyName + id + cnt, dataType: 'json', success: function (result) {
            $('#loader').hide();
            weatherData = result;
            var icons = [];

            $("#loc").html(result.city.name + ", " + result.city.country);
            $("#cur-weath").html(result.list[0].weather[0].main);
            $("#cur-deg").html(Math.round(result.list[0].main.temp - 273.15) + "° C");
            $("#cur-desc").html(result.list[0].weather[0].description);
            var icon = result.list[0].weather[0].icon;
            // setBackground(icon);
            //icons.push(result.list[0].weather[0].icon+".png");
            skycons.set("cur-icon", Icons[icon].icn);
            // $("#cur-icon").html("<img src='http://openweathermap.org/img/w/"+icons[0]+"'style='width:100px;height:100px;'>");
            for (var i = 1; i < 4; i++) {
                var $next = $(".next-weath");
                icons.push(result.list[i].weather[0].icon);
                var dt = new Date(result.list[i].dt_txt);
                if (dt == "Invalid Date") { //modify dt for internet explorer compatibility
                    var ar = result.list[i].dt_txt.split(" ");
                    dt = new Date(ar[0] + "T" + ar[1]);
                }
                var hour = dt.toLocaleTimeString('en-US', { hour: "2-digit", minute: "2-digit", hour12: true, });
                $next.eq(i - 1).find(".next-hour").html(hour);
                $next.eq(i - 1).find(".next-desc").text(result.list[i].weather[0].description);
                $next.eq(i - 1).find(".next-deg").html(Math.round(result.list[i].main.temp - 273.15) + "° C");
                skycons.set($next.eq(i - 1).find(".next-icon")[0], Icons[icons[i - 1]].icn);
            }


        },

        error: function (error, errorType, errorMessage) {
            $("#loc").html("Unable to Locate").next().hide();
        },

        beforeSend: function () {
            $("#loc").html("loading").next().show();

        }
    });
}
skycons.play();
setInterval(function () {
    curDate.html(new Date().toLocaleTimeString('en-US', options));
}, 60000);
