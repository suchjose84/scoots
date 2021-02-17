const requestURL = 'data/rentals.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const rentals = jsonObject['rentals']
    
    for (let i = 0; i < rentals.length; i++) {
      
      let card = document.createElement('article');
      let div = document.createElement('div');
      let cardHeading = document.createElement('h3');
      let motto = document.createElement('h5');
      let brand = document.createElement('p');
      let capacity = document.createElement('p');
      let price = document.createElement('p');
      let img = document.createElement('img');


      cardHeading.innerHTML = rentals[i].vehicleType;
      motto.innerHTML = rentals[i].motto;
      brand.innerHTML = "Brand: " + rentals[i].brand;
      capacity.innerHTML = "Capacity: " + rentals[i].capacity;
      price.innerHTML = "Price: " + rentals[i].price;
      img.setAttribute('src', rentals[i].imageurl);
      img.setAttribute('alt', 'vehicleImage');
      div.setAttribute('class', '.cardData');

      card.appendChild(div);
      div.appendChild(cardHeading);
      div.appendChild(motto);
      div.appendChild(brand);
      div.appendChild(capacity);
      div.appendChild(price);
      card.appendChild(img);

      document.querySelector('.card').appendChild(card);

      

    }


    
});