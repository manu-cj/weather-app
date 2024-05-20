import { getCoordoner } from "./api/coordonner.js";
import { weatherData } from "./api/weather.js";
import { createGraph } from "./components/createGraph.js";

let inputText = document.querySelector('.text');
let inputsubmit = document.querySelector('.send');
const main = document.querySelector('main');
let choiceDiv = document.querySelector('.choice');

const storedValue = localStorage.getItem('Weather-city');
if (storedValue) {
  console.log(`Dernière recherche: ${storedValue}`);
} else {
    localStorage.setItem('Weather-city', 'Brussels,BE');
    location.reload();
}

inputText.addEventListener('keyup', () => {
    getCoordoner(inputText.value);
    choiceDiv.style.display = 'flex';
   
    if (inputText.value.length < 3) {
        choiceDiv.style.display = 'none';  
    }
})




inputsubmit.addEventListener('click', () => {
    if (inputText.value.length > 0) {
        
        let city = choiceDiv.children[0].textContent.toLocaleLowerCase()
        main.innerHTML = "";
        localStorage.setItem('Weather-city', city);
        
        main.appendChild(section_weather);
        section_weather.innerHTML = "";
        weatherData(city);
    }
})

window.addEventListener("click", (e) => {
    if (e.target !== inputText || e.target !== choiceDiv) {
      choiceDiv.style.display = "none";
    }
  });

let section_weather = document.createElement('section');
section_weather.classList.add('section_weather');
main.appendChild(section_weather);

weatherData(storedValue);





