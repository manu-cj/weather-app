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

    
    let datas_div = document.createElement('article');
    let hour_div = document.createElement('div');
    let h2 = document.createElement('h1');

   
    datas_div.classList.add('datas_div');
    hour_div.classList.add('hour_div');
    h2.classList.add('day-name-data');

    h2.textContent = dayName;

    for (let i = start; i < end; i++) {
        const element = datas.list[i];
        // console.log(element.dt_txt);

        let dates = new Date(`${element.dt_txt}`)
        const heure = dates.getHours();

        let hour_data = document.createElement('div');
        hour_data.classList.add('hour_data');
        
        hour_div.appendChild(hour_data);
        hour_data.innerHTML = `<h1>${heure} : 00</h1>
        <h5>${element.main.temp} °C</h5>`
    }

    
    section_weather.appendChild(datas_div);
    datas_div.appendChild(h2);
    datas_div.appendChild(hour_div);
    
}

export {createCard};