function onJson(json){
    console.log('Json ricevuto');
    const library = document.querySelector('#film-view');
    library.innerHTML = '';

    const film = document.createElement('div');
    film.classList.add('film');
    const caption = document.createElement('span');
    const caption2 = document.createElement('span');
    const caption3 = document.createElement('span');
    const img = document.createElement('img');
    caption.textContent = json.Released;
    caption2.textContent = json.Runtime;
    caption3.textContent = json.Plot;
    img.src = json.Poster;

    film.appendChild(caption);
    film.appendChild(caption2);
    film.appendChild(caption3);
    film.appendChild(img);
    library.append(film);
}
function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }

function search(event){
    event.preventDefault();

    const film_input = document.querySelector('#film');
    const film_value = encodeURIComponent(film_input.value);
    console.log('eseguo ricerca:' + film_value);

    rest_url = 'http://www.omdbapi.com/?apikey=a887c14f&t=' + film_value;
    console.log('URL: ' + rest_url);
    fetch(rest_url).then(onResponse).then(onJson);
}


const form = document.querySelector('form');
form.addEventListener('submit',search);

function onJsonmeteo(json){
    console.log('JSON ricevuto');
    const library = document.querySelector('#meteo');
    library.innerHTML = '';
    
    const previsioni = document.createElement('div');
    previsioni.classList.add('previsioni');
    const caption = document.createElement('span');
    const caption2 = document.createElement('span');
    const caption3 = document.createElement('span');
    const caption4 = document.createElement('span');
    const caption5 = document.createElement('span');
    const img = document.createElement('img');
    caption.textContent = json.location.name;
    caption2.textContent = json.location.country;
    caption3.textContent = json.location.region;
    caption4.textContent = json.current.temperature;
    caption5.textContent = json.current.weather_descriptions;
    img.src = json.current.weather_icons;
    previsioni.appendChild(caption);
    previsioni.appendChild(caption2);
    previsioni.appendChild(caption3);
    previsioni.appendChild(caption4);
    previsioni.appendChild(caption5);
    previsioni.appendChild(img);
    library.appendChild(previsioni);
}

function onResponsemeteo(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }

function api(event){
    rest_url = 'http://api.weatherstack.com/current?access_key=7aa92c8ae1382f3e18201457e8d7fce6&query=Catania';
    console.log('URL: ' + rest_url);
    fetch(rest_url).then(onResponsemeteo).then(onJsonmeteo);
}

const button = document.querySelector('button');
button.addEventListener('click',api);