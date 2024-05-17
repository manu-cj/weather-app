
import { displayForEachHours } from "./displayEachHours.js";


const createCard = async (datas, start, end) => {

    //date au format 17/03/24 03:00
    let dateString = datas.list[start].dt_txt;
    console.log(dateString);
    const dateObject = new Date(dateString);

    // Array of day names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Getting the day index (0 for Sunday, 1 for Monday, etc.)
    const dayIndex = dateObject.getDay();
    
    // Getting the day name from the index
    // dayName est donc égal à thusday, monday, etc
    const dayName = daysOfWeek[dayIndex];

    const section_weather = document.querySelector('.section_weather');
    section_weather.id = start;
    let index = section_weather.id;

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

    
    
    let datas_div = document.querySelector('.datas_div');
    let hour_div = document.createElement('div');
    let h2_title_card = document.createElement('h2');
    let actualy_weather_div = document.createElement('div');
    let weather_and_temp_div = document.createElement('div');
    let weather_div = document.createElement('div');
    let temp_div = document.createElement('div');
    let humidity_and_wind_div = document.createElement('div');
    let humidity_div = document.createElement('div');
    let wind_div = document.createElement('div');
    let precipitation_and_visibility = document.createElement('div');
    let precipitation_div = document.createElement('div');
    let visibility_div = document.createElement('div');
    
   
    hour_div.classList.add('hour_div');
    h2_title_card.classList.add('h2_title_card');
    actualy_weather_div.classList.add('actualy_weather_div');
    weather_and_temp_div.classList.add('weather_and_temp_div');
    weather_div.classList.add('weather_div');
    temp_div.classList.add('temp_div');
    humidity_and_wind_div.classList.add('humidity_and_wind_div');
    humidity_div.classList.add('humidity_div');
    wind_div.classList.add('wind_div');
    precipitation_and_visibility.classList.add('precipitation_and_visibility');
    precipitation_div.classList.add('precipitation_div');
    visibility_div.classList.add('visibility_div');
    
    


    h2_title_card.textContent = dayName;
    let data = datas.list[index];
    weather_div.innerHTML = `<h3 class="actualy_weather_data">${iconWeather}</h3>`;
    temp_div.innerHTML = `<h2 class="actualy_weather_data">${Math.round(data.main.temp)} ° C</h2>`;
    
    humidity_div.innerHTML = `<h3 class="subTitle">humidity</h3>
    <h3 class="actualy_weather_data">${data.main.humidity} %<i class="fas fa-tint" style="color:cyan;"></i></h3>`;
    wind_div.innerHTML = `<h3 class="subTitle">wind</h3>
    <h3 class="actualy_weather_data">${data.wind.speed} km/h  <i class="fas fa-location-arrow fa-rotate-by" style="transform: rotate(${-45+data.wind.deg}deg);""></i></h3>`;
    
    if (data.rain && '3h' in data.rain) {
        precipitation_div.innerHTML = `<h3 class="subTitle">precipitation</h3>
        <h3>${data.rain['3h']} mm <i class="fas fa-umbrella"></i></h3>`;
        visibility_div.innerHTML = `<h3 class="subTitle">visibility</h3>
        <h3>${data.visibility} m <i class="fas fa-smog" style="color: #dedede;"></i></h3>`;
    } else {
        precipitation_div.innerHTML = `<h3 class="subTitle">precipitation</h3>
        <h3>0 mm <i class="fas fa-umbrella"></i></h3>`;
        visibility_div.innerHTML = `<h3 class="subTitle">visibility</h3>
        <h3>${data.visibility} m <i class="fas fa-smog" style="color: #f2f2f2;"></i></h3>`;
    }

   

    datas_div.appendChild(h2_title_card);
    datas_div.appendChild(hour_div);
    datas_div.appendChild(actualy_weather_div);
    actualy_weather_div.appendChild(weather_and_temp_div);
    weather_and_temp_div.appendChild(temp_div);
    weather_and_temp_div.appendChild(weather_div);
    actualy_weather_div.appendChild(humidity_and_wind_div);
    humidity_and_wind_div.appendChild(humidity_div);
    humidity_and_wind_div.appendChild(wind_div);
    actualy_weather_div.appendChild(precipitation_and_visibility);
    precipitation_and_visibility.appendChild(precipitation_div);
    precipitation_and_visibility.appendChild(visibility_div);



    
    


    displayForEachHours(hour_div, dateString, datas, start, end);
    
    function change_hours() {
        let divs_hours = document.querySelectorAll('.hour_data');
    divs_hours.forEach(div_hour => {
        div_hour.addEventListener('click', () => {
            console.log(index);
            section_weather.id = div_hour.id;
            console.log(div_hour.id);
        })
    });
    }
    change_hours();
    
}

export {createCard};