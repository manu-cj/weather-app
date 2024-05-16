const displayForEachHours = (hour_div, dateString, datas, start, end) => {
    for (let i = start; i < end; i++) {
        const data = datas.list[i];

        let dates = new Date(`${data.dt_txt}`)
        const heure = dates.getHours();
        console.log(data);
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
        let weatherCondition = data.weather[0].description;
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


        let hour_data = document.createElement('div');
        let precipitation_data = document.createElement('h4');
        
        

        hour_data.classList.add('hour_data');
        
        hour_div.appendChild(hour_data);
        
        

        hour_data.innerHTML = `<h2>${heure} : 00</h2>
        ${iconWeather}
        <h5>${Math.round(data.main.temp)} °C</h5>
        `;
        hour_data.appendChild(precipitation_data);
        

        if (data.rain && '3h' in data.rain) {

            precipitation_data.innerHTML = 
            `
            <h5>${data.rain['3h']} mm <i class="fas fa-umbrella"></i></h5>
            `;
        } else {
            precipitation_data.innerHTML = 
            `
            <h5>0 mm <i class="fas fa-umbrella"></i></h5>
            `;
        }

    }
}

export {displayForEachHours};