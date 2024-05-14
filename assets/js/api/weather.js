import { createCard } from "./../components/createCard.js";

createCard
const weatherData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=12e14c46b7b7aec01efc9c6d10f8e568`);
        if (!response.ok) {
            throw new Error('Erreur HTTP : ' + response.status);
        }
        const datas = await response.json();
        
        let dates = new Date(`${datas.list[0].dt_txt}`)
        const heure = dates.getHours();
        console.log(heure);

        const section_weather = document.querySelector('.section_weather');
        section_weather.innerHTML = ""

        switch (heure) {
            case 0:
              console.log("Il est minuit.");
              break;
            case 3:
              console.log("Il est 3 heures.");
              break;
            case 6:
              console.log("Il est 6 heures.");
              break;
            case 9:
              console.log("Il est 9 heures.");
              createCard(datas,0, 8);
              createCard(datas,7, 16);
              createCard(datas,15, 24);
              createCard(datas,23, 32);
              createCard(datas,31, 40);
              break;
            case 12:
                console.log("Il est midi.");
                createCard(datas, 0, 7);
                createCard(datas, 6, 15);
                createCard(datas, 14, 23);
                createCard(datas, 30, 39);
              break;
            case 15:
                console.log("Il est 15 heures.");
                createCard(datas,0, 6);
                createCard(datas,5, 14);
                createCard(datas,13, 22);
                createCard(datas,21, 30);
                createCard(datas,29, 38);
              break;
            case 18:
              console.log("Il est 18 heures.");
              createCard(datas,0, 5);
                createCard(datas,4, 13);
                createCard(datas,12, 21);
                createCard(datas,20, 29);
                createCard(datas,28, 37);
              break;
            case 21:
              console.log("Il est 21 heures.");
              break;
            default:
              console.log("L'heure n'est pas dans la liste spécifiée.");
          }

        
        return datas;
    } catch (error) {
        console.error('Erreur lors de la requête API : ', error);
        throw error;
    }
}

export {weatherData};