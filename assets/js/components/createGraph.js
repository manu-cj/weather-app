const createGraph = (datas, start, end) => {

    const section_weather = document.querySelector('.section_weather');
    const graph_div = document.querySelector('.graph_div');
   
    graph_div.innerHTML = "";
    graph_div.innerHTML = `<canvas id="myChart"></canvas>`;
    const ctx = document.getElementById('myChart');
    let hours = [];
    let temps = [];

    for (let i = start; i < end; i++) {
        let data = datas.list[i];
        
        let dates = new Date(`${data.dt_txt}`)
        const heure = dates.getHours();
        hours.push(`${heure}H`);
        temps.push(Math.round(data.main.temp));
      }
    console.log(hours);
    console.log(temps);

    new Chart(ctx, {
        type: 'line',
        data: {
          labels: hours,
          datasets: [{
            label: '°C',
            borderColor: 'tomato',
            data: temps,
            borderWidth: 1,
            borderRadius: 5,
            color: 'white',
            backgroundColor: ['lightsalmon', 'cyan', 'teal', 'yellow'],
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      
}

export {createGraph};