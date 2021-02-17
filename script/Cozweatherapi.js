const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {
        const dateTime = document.querySelector('#dateTime');
        const description = document.querySelector('#description');
        const descWord = jsObject.weather[0].description;
        const country = document.querySelector('#country');
        const city = document.querySelector('#city');
        const isrc2 = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}.png`;
        const weatherImg = document.querySelector('#weatherImg');
        const temp = document.querySelector('#temp');
        const feelsLike = document.querySelector('#feelsLike');
        const windClass = document.querySelector('#windClass');
        const windSpeed = jsObject.wind.speed;
        const degree = jsObject.wind.deg;
        const windValue = document.querySelector('#windValue');
        const pressure = document.querySelector('#pressure');
        const humidity = document.querySelector('#humidity');

        let windWord = "";
        if (windSpeed < 1) {
            windWord = "Calm";
        } else if (windSpeed <= 6) {
            windWord = "Light air";
        } else if (windSpeed <= 11) {
            windWord = "Light breeze";
        } else if (windSpeed <= 19) {
            windWord = "Gentle breeze";
        } else if (windSpeed <= 30) {
            windWord = "Moderate breeze";
        } else if (windSpeed <= 39) {
            windWord = "Fresh breeze";
        } else if (windSpeed <= 50) {
            windWord = "Strong breeze";
        } else if (windSpeed <= 61) {
            windWord = "Moderate gale";
        } else if (windSpeed <= 74) {
            windWord = "Fresh gale";
        } else if (windSpeed <= 87) {
            windWord = "Strong gale";
        } else if (windSpeed <= 102) {
            windWord = "Whole gale";
        } else if (windSpeed <= 117) {
            windWord = "Storm";
        } else {
            windWord = "Hurricane";
        }

        function windSpeedDirection(degree) {
            let direction = degree;

            if (degree <= 11.25){
                direction = "N";
            }else if (degree <= 33.75){
                direction = "NNE";
            }else if (degree <= 56.25){
                direction = "NE";
            }else if (degree <= 78.75){
                direction = "ENE";
            }else if (degree <= 101.25){
                direction = "E";
            }else if (degree <= 123.75){
                direction = "ESE";
            }else if (degree <= 146.25){
                direction = "SE";
            }else if (degree <= 168.75){
                direction = "SSE";
            }else if (degree <= 191.25){
                direction = "SSE";
            }else if (degree <= 213.75){
                direction = "SSE";
            }else if (degree <= 236.25){
                direction = "SSE";
            }else if (degree <= 258.75){
                direction = "SSE";
            }else if (degree <= 281.25){
                direction = "SSE";
            }else if (degree <= 303.75){
                direction = "SSE";
            }else if (degree <= 326.25){
                direction = "SSE";
            }else if (degree <= 348.75){
                direction = "SSE";
            }else if (degree <= 359.999){
                direction = "N";
            }

            return direction;

        }

        function formatAMPM(date) {

            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            var options = {
                month: "short"
            };
            var month = new Intl.DateTimeFormat("en-US", options).format(date);
            var dateNo = date.getDate();
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ampm + ", " + month + " " + dateNo;
            return strTime;
        }


        city.innerHTML = jsObject.name;
        country.innerHTML = jsObject.sys.country;
        weatherImg.setAttribute('src', isrc2);
        temp.innerHTML = Math.round(jsObject.main.temp).toString() + "°F";
        feelsLike.innerHTML = "Feels like " + Math.round(jsObject.main.feels_like).toString() + "°F";
        description.innerHTML = descWord.charAt(0).toUpperCase() + descWord.slice(1);
        windClass.innerHTML = windWord;
        dateTime.innerHTML = formatAMPM(new Date());
        windValue.innerHTML = jsObject.wind.speed.toString() + "m/h" + " " + windSpeedDirection(degree) + ". ";
        pressure.innerHTML = jsObject.main.pressure.toString() + "hPA. ";
        humidity.innerHTML = "Humidity: " + jsObject.main.humidity.toString() + "%";






    });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL2)
    .then(response => response.json())
    .then(jsObject => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecast);
        let day = 0;
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


        function shortMonth(month, date) {

            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let result = months[month] + " " + date.toString();
            return result;
        }

        forecast.forEach(x => {

            const d = new Date(x.dt_txt);
            const dateShort = shortMonth(new Date().getMonth(), new Date().getDate() + day + 1);
            const weatherIcon = document.querySelector(`#icon${day+1}`);
            const isrc = `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}.png`;

            document.getElementById(`day${day+1}`).textContent = (weekdays[d.getDay() + 1] + ", " + dateShort);
            document.getElementById(`temp${day+1}`).textContent = Math.round(x.main.temp) + "°F";
            document.getElementById(`desc${day+1}`).textContent = x.weather[0].description;
            weatherIcon.setAttribute('src', isrc);
            weatherIcon.setAttribute('alt', forecast[day].weather[0].description);
            day++;

        })

    });