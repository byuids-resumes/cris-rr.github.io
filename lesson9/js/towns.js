const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const towns = jsonObject['towns'];
        towns.forEach(town => {
            if (town.name == "Preston" || town.name == "Soda Springs" || town.name == "Fish Haven") {
                let card = document.createElement('article');
                let data = document.createElement('div');
                let name = document.createElement('h2');
                let motto = document.createElement('h3')
                let population = document.createElement('p');
                let year = document.createElement('p');
                let rainfall = document.createElement('p');
                let image =document.createElement('img');

                data.setAttribute('class', 'data');
                card.setAttribute('class', 'town')

                name.textContent = town.name;
                motto.textContent = town.motto;
                year.textContent = `Year Founded: ${town.yearFounded}`;
                population.textContent = `Population: ${town.currentPopulation}`;
                rainfall.textContent = `Annual Rainfall: ${town.averageRainfall}`
                image.setAttribute('src', `images/${town.photo}`);
                image.setAttribute('alt', town.name);

                data.appendChild(name);
                data.appendChild(motto);
                data.appendChild(year);
                data.appendChild(population);
                data.appendChild(rainfall);
                

                card.appendChild(data);
                card.appendChild(image);
                document.querySelector('.towns').appendChild(card);
            }
        });
    });