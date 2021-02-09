let ndate = new Date();
let day2 = ndate.getDay();
let days2 = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    

]
let firstDay = days2[day2 + 1];
let secondDay = days2[day2 + 2];
let thirdDay = days2[day2 + 3];
let fourthDay = days2[day2 + 4];
let fifthDay = days2[day2 + 5];
document.getElementById("firstDay").textContent = firstDay;
document.getElementById("secondDay").textContent = secondDay;
document.getElementById("thirdDay").textContent = thirdDay;
document.getElementById("fourthDay").textContent = fourthDay;
document.getElementById("fifthDay").textContent = fifthDay;