
import { displayForEachHours } from "./displayEachHours.js";

const createCard = async (datas, start, end) => {

    let dateString = datas.list[start].dt_txt;
    console.log(dateString);
    const dateObject = new Date(dateString);

    // Array of day names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Getting the day index (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = dateObject.getDay();
    
    // Getting the day name from the index
    const dayName = daysOfWeek[dayIndex];

    const section_weather = document.querySelector('.section_weather');


    let dates = new Date(`${datas.list[start].dt_txt}`)
        const heure = dates.getHours();
        function isWinter(nightIcon, dayIcon) {
            const currentMonth = new Date(dateString).getMonth();
            console.log(currentMonth);
            if (currentMonth === 11 || currentMonth === 0 || currentMonth === 1) {
                if (heure === 18 || heure === 21 || heure === 0 || heure === 3) {
                    iconWeather = nightIcon;
                } else {
                    iconWeather = dayIcon;
                }
            } 
            else {
                if (heure === 21 || heure === 0 || heure === 3) {
                    iconWeather = nightIcon;
                } else {
                    iconWeather = dayIcon;
                }
            }   
        }
        
        let iconWeather = '';
        let weatherCondition = datas.list[start].weather[0].description;
        switch (weatherCondition) {
            case 'clear sky':
                isWinter('<img src="http://openweathermap.org/img/wn/01n@2x.png" alt="icon02d">', '<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="icon02d">');
                break;
            case 'few clouds':
                isWinter('<img src="http://openweathermap.org/img/wn/02n@2x.png" alt="icon02d">', '<img src="http://openweathermap.org/img/wn/02d@2x.png" alt="icon02d">');
                break;
            case 'scattered clouds':
                iconWeather = '<img src="http://openweathermap.org/img/wn/03n@2x.png" alt="icon02d">';
                break;
            case 'broken clouds':
                iconWeather = '<img src="http://openweathermap.org/img/wn/04n@2x.png" alt="icon02d">';
                break;
            case 'shower rain':
                iconWeather = '<img src="http://openweathermap.org/img/wn/09n@2x.png" alt="icon02d">';
                break;
            case 'rain':
                isWinter('<img src="http://openweathermap.org/img/wn/10n@2x.png" alt="icon02d">', '<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon02d">');
                break;
            case 'light rain': 
                isWinter('<img src="http://openweathermap.org/img/wn/10n@2x.png" alt="icon02d">', '<img src="http://openweathermap.org/img/wn/10d@2x.png" alt="icon02d">');
                break;    
            case 'thunderstorm':
                iconWeather = '<img src="http://openweathermap.org/img/wn/11d@2x.png" alt="icon02d">';
                break;
            case 'snow':
                iconWeather = '<img src="http://openweathermap.org/img/wn/13d@2x.png" alt="icon02d">';
                break;
            case 'mist':
                iconWeather = '<img src="http://openweathermap.org/img/wn/50n@2x.png" alt="icon02d">';
                break;
            case 'overcast clouds':
                iconWeather = '<img src="http://openweathermap.org/img/wn/04n@2x.png" alt="icon02d">';
                break;
            case 'moderate rain':
                iconWeather = '<img src="http://openweathermap.org/img/wn/09n@2x.png" alt="icon02d">';
                break;
            default:
                iconWeather = '<img src="http://openweathermap.org/img/wn/03n@2x.png" alt="icon02d">';
                break;
        }



    let datas_div = document.createElement('article');
    let hour_div = document.createElement('div');
    let h2 = document.createElement('h1');
    let actualy_weather_div = document.createElement('div');
    let weather_and_temp_div = document.createElement('div');
    let humidity_and_wind_div = document.createElement('div');
    let precipitation_and_visibility = document.createElement('div');
   
    datas_div.classList.add('datas_div');
    hour_div.classList.add('hour_div');
    h2.classList.add('day-name-data');
    actualy_weather_div.classList.add('actualy_weather_div');
    weather_and_temp_div.classList.add('weather_and_temp_div');
    humidity_and_wind_div.classList.add('humidity_and_wind_div');
    precipitation_and_visibility.classList.add('precipitation_and_visibility');


    h2.textContent = dayName;
    h2.style.marginLeft = '30px';
    let data = datas.list[start];
    weather_and_temp_div.innerHTML = 
    `<h2 class="actualy_weather_data">${Math.round(data.main.temp)} ° C</h2>
    <h3 class="actualy_weather_data">${iconWeather}</h3>`;
    humidity_and_wind_div.innerHTML = 
    `<h3 class="subTitle">humidity</h3>
    <h3 class="actualy_weather_data">${data.main.humidity} %<i class="fas fa-tint" style="color:cyan;"></i></h3>
    <h3 class="subTitle">wind</h3>
    <h3 class="actualy_weather_data">${data.wind.speed} km/h  <i class="fas fa-location-arrow fa-rotate-by" style="transform: rotate(${-45+data.wind.deg}deg);""></i></h3>
    `;3
    if (data.rain && '3h' in data.rain) {
        precipitation_and_visibility.innerHTML = 
        `<h3 class="subTitle">precipitation</h3>
        <h3>${data.rain['3h']} mm <i class="fas fa-umbrella" style="color: #2a2d55;"></i></h3>
        <h3 class="subTitle">visibility</h3>
        <h3>${data.visibility} m</h3>
        `;
    } else {
        precipitation_and_visibility.innerHTML = 
        `<h3 class="subTitle">precipitation</h3>
        <h3>0 mm <i class="fas fa-umbrella" style="color: #2a2d55;"></i></h3>
        <h3 class="subTitle">visibility</h3>
        <h3>${data.visibility} m</h3>`;
    }
   
    
    section_weather.appendChild(datas_div);
    datas_div.appendChild(h2);
    datas_div.appendChild(hour_div);
    datas_div.appendChild(actualy_weather_div);
    actualy_weather_div.appendChild(weather_and_temp_div);
    actualy_weather_div.appendChild(humidity_and_wind_div);
    actualy_weather_div.appendChild(precipitation_and_visibility);



    displayForEachHours(hour_div, dateString, datas, start, end);
    
}

export {createCard};