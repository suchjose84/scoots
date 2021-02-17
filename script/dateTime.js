let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let d = new Date();
let dayName = days[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();

let hrs = d.getHours();

if (hrs < 10) {
    hrs = "0" + hrs.toString();
}

let minutes = d.getMinutes();

if (minutes < 10) {
    minutes = "0" + minutes.toString();
}


let fullDate = dayName + ", " + monthName + " " + d.getDate() + ", " + year + " " + 
hrs + ":" + minutes;


document.getElementById("currentYear").textContent = " " + year + " ";
document.getElementById("dateTime2").textContent = fullDate;
