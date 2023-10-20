
const container = document.querySelector('.container');
const wyszukiwanieBox = document.querySelector('.wyszukiwanie button');
const pogodaInf = document.querySelector('.pogoda-inf');
const pogodaBox = document.querySelector('.pogoda-box');
const error = document.querySelector('.nie-zanaleziono');

wyszukiwanieBox.addEventListener('click', () => {

    const kluczApi = '1042d9b1601c0a4077290f82ceb29005';
    const miasto = document.querySelector('.wyszukiwanie input').value;
    
    if(miasto === '')
        return;


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${miasto}&units=metric&appid=${kluczApi}`)
    .then(response => response.json())
    .then(json => {

        if(json.cod ==='404'){
            container.style.height = '450px';
            pogodaBox.style.display = 'none';
            pogodaInf.style.display = 'none';
            error.style.display = 'block';
            error.classList.add('fadeIn');
            return;

        } 

        error.style.display = 'none';
        error.classList.remove('fadeIn');

        const zdjecie = document.querySelector('.pogoda-box img');
        const temperatura = document.querySelector('.pogoda-box .temperatura');
        const opis = document.querySelector('.pogoda-box .opis ');
        const wilgotnosc = document.querySelector('.pogoda-inf .wilgotnosc span');
        const wiatr = document.querySelector('.pogoda-inf .wiatr span');


        switch (json.weather[0].main){

             case'Clear':
             image.src = 'zdjecia/slonce.png';
                break;
                case'Snow':
             image.src = 'zdjecia/snieg.png';
                break;
                case'Rain':
             image.src = 'zdjecia/deszcz.png';
                break;

                case'Haze':
             image.src = 'zdjecia/mgla.png';
                break;

                case'Clouds':
                image.src = 'zdjecia/chmury.png';
                   break;

                   default: 
                   image.src = '';
        }

        temperatura.innerHTML = `${parseInt(json.main.temp)}<span>℃</span>`;
        opis.innerHTML = `${json.weather[0].opis}`;
        wilgotnosc.innerHTML = `${json.main.humidity}%`;
        wiatr.innerHTML = `${parseInt(json.wind.speed)}km/h`;

        pogodaBox.style.display = '';
        pogodaInf.style.display = '';
        pogodaBox.classList.add('fadeIn');
        pogodaInf.classList.add('fadeIn');
        container.style.height = '650px';


    }) ;
    
});

