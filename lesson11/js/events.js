function getActualTown() {
    let actualPath = window.location.pathname; 
    let town = actualPath.substring(actualPath.lastIndexOf('/')+1);
    town = town.substring(0, town.length-5);
    town = town.toLowerCase()
    let id ="" 
    if (town.includes('preston')) {
        id = 'preston';
    } else if (town.includes('fishhaven')) {
        id = 'fish haven'
    } else if (town.includes('sodasprings')) {
        id = 'soda springs'
    }
    return id
}


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then((response) => response.json())
    .then(function(jsObject) {
        const towns = jsObject['towns']
        towns.forEach(town => {
            if (town.name.toLowerCase() == getActualTown()) {
                town.events.forEach(event => {
                    var data = document.createElement('p');
                    data.setAttribute('class', 'event');
                    data.textContent = event;
                    document.querySelector('#events').appendChild(data);
                });
            }
    
        })
    });