const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL)
    .then(response => response.json())
    .then(jsObject => {

        const summary = document.querySelector('#description');
        const high = document.querySelector('#highValue');
        const wchill = document.querySelector('#windChillValue');
        const humidity = document.querySelector('#humidity');
        const windSpeed = document.querySelector('#windSpeedValue');

        summary.innerHTML = jsObject.weather[0].description;
        high.innerHTML = jsObject.main.temp_max;
        humidity.innerHTML = jsObject.main.humidity;
        windSpeed.innerHTML = jsObject.wind.speed;


        //Calculate Wind chill
        let t = high.innerHTML;
        let s = windSpeed.innerHTML;

        //Rounder.
        let digits = 0;
        let multiplier = Math.pow(10, digits);

        if (t <= 50 && s >= 3) {
            windChill = (35.74 + (0.6215 * t)) - (35.75 * s ** 0.16) + (0.4275 * t * s ** 0.16)
            windChill = (Math.round(windChill * multiplier) / multiplier).toString();
        } else {
            windChill = "n/a";

        }

        wchill.innerHTML = windChill + '&#8457';


    });

const apiURL2 = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL2)
    .then(response => response.json())
    .then(jsObject => {
        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        let day = 0;
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        forecast.forEach(x => {
            const d = new Date(x.dt_txt);
            const weatherIcon = document.querySelector(`#icon${day+1}`);
            const isrc = `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}.png`;

            document.getElementById(`day${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`temp${day+1}`).textContent = Math.round(x.main.temp);
            weatherIcon.setAttribute('src', isrc);
            weatherIcon.setAttribute('alt', forecast[day].weather[0].description);
            day++;
        })

    });


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const town = towns[1];
        let eventImages = ["images/11FHfishday.jpg","images/11FHcreek.jpg", "images/11FHlakerun.jpg", "images/11FHplanting.jpg"];

        for (let i = 0; i < town.events.length; i++) {

            let card = document.createElement('article');
            let p = document.createElement('p');
            let img = document.createElement('img');


            p.innerHTML = town.events[i];
            img.setAttribute('src', eventImages[i]);
            img.setAttribute('alt', 'townImage');

            card.appendChild(p);
            card.appendChild(img);


            document.querySelector('.card').appendChild(card);

        }

    });