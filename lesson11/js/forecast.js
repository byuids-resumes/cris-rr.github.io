function getCodeTown() {
    let path = window.location.pathname; 
    let town = path.substring(path.lastIndexOf('/')+1);
    town = town.substring(0, town.length-5);
    town = town.toLowerCase();
    let id = ""
    if (town.includes('preston')) {
        id = 'id=5604473';
    } else if (town.includes('fish')) {
        id = 'zip=83287';        
    } else if (town.includes('soda')) {
        id = 'id=5607916'
    }

    return id;
}

const apiURL = `https://api.openweathermap.org/data/2.5/forecast?${getCodeTown()}&units=imperial&APPID=f1fa408b88505a26227247e1a8767c30`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const forecastDays = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
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