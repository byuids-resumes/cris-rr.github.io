const apiURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=f1fa408b88505a26227247e1a8767c30';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecastDays = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.log(forecastDays);
        for (let i = 0; i < forecastDays.length; i++) {
            const imagesrc = `https://openweathermap.org/img/w/${forecastDays[i].weather[0].icon}.png`
            document.getElementById(`day${i+1}`).textContent = getDayName(i+1);
            document.getElementById(`img${i+1}`).setAttribute('src', imagesrc);
            document.getElementById(`img${i+1}`).setAttribute('alt', forecastDays[i].weather[0].description);
            document.getElementById(`temp${i+1}`).textContent = `${forecastDays[i].main.temp.toFixed(0)} °F`;
        }
    });

function getDayName(day){
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    let currentDate = new Date();
    let currentDay = currentDate.getDay();
    currentDay += day;
    if (currentDay>6) {
        currentDay -= 7;
    }

    return days[currentDay];

}