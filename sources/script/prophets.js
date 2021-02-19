
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets']
    for (let i = 0; i < prophets.length; i++) {
      
      let card = document.createElement('article');
      let h2 = document.createElement('h2');
      let pDateOfBirth = document.createElement('p');
      let pPlaceOfBirth = document.createElement('p');
      let img = document.createElement('img');


      h2.innerHTML = prophets[i].name + " " + prophets[i].lastname;
      pDateOfBirth.innerHTML = "Date of birth: " + prophets[i].birthdate;
      pPlaceOfBirth.innerHTML = "Place of birth: " + prophets[i].birthplace;
      img.setAttribute('src', prophets[i].imageurl);
      img.setAttribute('data-src', prophets[i].imageurl);
      img.setAttribute('alt', 'prophetImage');

      card.appendChild(h2);
      card.appendChild(pDateOfBirth);
      card.appendChild(pPlaceOfBirth);
      
      card.appendChild(img);

      document.querySelector('.cards').appendChild(card);

    }
});






