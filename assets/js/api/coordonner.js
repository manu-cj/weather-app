import { weatherData } from "./weather.js";

let getCoordoner = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=2&appid=12e14c46b7b7aec01efc9c6d10f8e568`);
        if (!response.ok) {
            throw new Error('Erreur HTTP : ' + response.status);
        }
        const datas = await response.json(); 
        
        console.log(datas);
        let inputText = document.querySelector('.text');
        inputText.placeholder = `${datas[0].name},${datas[0].country}`;
        let choiceDiv = document.querySelector('.choice');
        choiceDiv.innerHTML = "";

        datas.forEach(data => {
        let createLi = document.createElement('li');
        createLi.classList.add('search-city');
        createLi.textContent = `${data.name},${data.country}`;
        choiceDiv.appendChild(createLi);

        createLi.addEventListener('click', () => {
            inputText.value = createLi.textContent;
            localStorage.setItem('Weather-city', createLi.textContent);
            const section_weather = document.querySelector('.section_weather');
            section_weather.innerHTML = "";
            weatherData(createLi.textContent);
        })
        });

        return datas;
    } catch (error) {
        console.error('Erreur lors de la requête API : ', error);
        throw error;
    }
}

export {getCoordoner};