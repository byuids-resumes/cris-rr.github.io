const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=f1fa408b88505a26227247e1a8767c30';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        // console.log(jsObject);
        
        const temp = jsObject.main.temp
        const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`
        const desc = jsObject.weather[0].description;

        document.getElementById('current-temp').textContent = temp;
        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src', imagesrc);
        document.getElementById('icon').setAttribute('alt', desc);

    });