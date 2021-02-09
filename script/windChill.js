
let t = parseFloat(document.getElementById("highValue").textContent);
let s = parseFloat(document.getElementById("windSpeedValue").textContent);

if(t <= 50 && s >= 4.8){
        windChill = (35.74 + (0.6215 * t)) - (35.75 * s**0.16) + (0.4275 * t * s**0.16);
}else{
        windChill = "n/a";
    
}

document.getElementById("windChillValue").textContent = windChill;

//Round off the result to two digits after the decimal.
//let digits = 1;
//let multiplier = Math.pow(10, digits);
//windChill = (windChill * multiplier) / multiplier;




    



    


