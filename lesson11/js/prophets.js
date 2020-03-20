const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const prophets = jsonObject['prophets'];
        prophets.forEach(prophet => {
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let image =document.createElement('img');
            let birth = document.createElement('p');
            let place = document.createElement('p');

            birth.setAttribute('class', 'birth');
            place.setAttribute('class', 'place');

            let fullname = `${prophet.name} ${prophet.lastname}`;

            name.textContent = fullname;
            image.setAttribute('src', prophet.imageurl);
            image.setAttribute('alt', fullname);
            birth.textContent = `Date of Birth: ${prophet.birthdate}`; 
            place.textContent = `Place of Birth: ${prophet.birthplace}`;

            card.appendChild(name);
            card.appendChild(birth);
            card.appendChild(place);
            card.appendChild(image);
            document.querySelector('.cards').appendChild(card);
        });
    });