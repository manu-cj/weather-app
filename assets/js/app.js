import { getCoordoner } from "./api/coordonner.js";
import { weatherData } from "./api/weather.js";

let inputText = document.querySelector('.text');
let inputsubmit = document.querySelector('.send');
const main = document.querySelector('main');

inputText.addEventListener('keyup', () => {
    getCoordoner(inputText.value);
})

inputsubmit.addEventListener('click', () => {
    if (inputText.value.length > 0) {
        let choiceDiv = document.querySelector('.choice');
        let city = choiceDiv.children[0].textContent.toLocaleLowerCase()
        main.innerHTML = "";
        
        main.appendChild(section_weather);
        section_weather.innerHTML = "";
        weatherData(city);
    }
})

let section_weather = document.createElement('section');
section_weather.classList.add('section_weather');
main.appendChild(section_weather);

weatherData('bruxelles, BE');