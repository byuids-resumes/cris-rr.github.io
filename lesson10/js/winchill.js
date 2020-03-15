let temperature = parseFloat(document.getElementById("temp").textContent);
let speed = parseFloat(document.getElementById("speed").textContent);

let windchill = "NA";
if (temperature <= 50 && speed >= 3.0) {
    windchill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temperature * Math.pow(speed, 0.16);
    windchill = windchill.toFixed(0)
}else {
    document.getElementById("windchill").nextSibling.textContent = "";    
}

document.getElementById("windchill").textContent = windchill;