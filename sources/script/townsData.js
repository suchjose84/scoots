const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns']
    
    for (let i = 0; i < towns.length; i++) {
      
      let card = document.createElement('article');
      let div = document.createElement('div');
      let cardHeading = document.createElement('h3');
      let motto = document.createElement('h5');
      let yearFound = document.createElement('p');
      let population = document.createElement('p');
      let annualRain = document.createElement('p');
      let img = document.createElement('img');


      cardHeading.innerHTML = towns[i].name;
      motto.innerHTML = towns[i].motto;
      yearFound.innerHTML = "Year Founded: " + towns[i].yearFounded;
      population.innerHTML = "Population: " + towns[i].currentPopulation;
      annualRain.innerHTML = "Annual Rain Fall: " + towns[i].averageRainfall;
      img.setAttribute('src', townImages[i]);
      img.setAttribute('alt', 'townImage');
      div.setAttribute('class', '.cardData');

      card.appendChild(div);
      div.appendChild(cardHeading);
      div.appendChild(motto);
      div.appendChild(yearFound);
      div.appendChild(population);
      div.appendChild(annualRain);
      card.appendChild(img);

      if (towns[i].name == "Preston"){
        
        document.querySelector('.card').appendChild(card);
      } else if(towns[i].name == "Fish Haven"){

        document.querySelector('.card').appendChild(card);

      } else if(towns[i].name == "Soda Springs"){
        document.querySelector('.card').appendChild(card);
      }

      

    }


    
});