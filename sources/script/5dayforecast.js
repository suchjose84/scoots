const apiURL2 = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=06087b0df1c638d2543f3f92fd17fde4";

fetch(apiURL2)
    .then(response2 => response2.json())
    .then(jsObject2 => {
        console.log(jsObject2);
        const forecast = jsObject2.list.filter(x => x.dt_txt.includes('18:00:00'));

    }
);