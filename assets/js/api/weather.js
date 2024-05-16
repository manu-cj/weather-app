import { createCard } from "./../components/createCard.js";
import { getPictureCity } from "./getPictureCity.js";

createCard;
const weatherData = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=12e14c46b7b7aec01efc9c6d10f8e568`
    );
    if (!response.ok) {
      throw new Error("Erreur HTTP : " + response.status);
    }
    const datas = await response.json();

    let dates = new Date(`${datas.list[0].dt_txt}`);
    const heure = dates.getHours();
    console.log(heure);

    const section_weather = document.querySelector(".section_weather");
    let datas_div = document.createElement("article");

    datas_div.classList.add("datas_div");

    let day = 1;
    function select_day(day1, day2, day3, day4, day5) {
      if (day === 1) {
        day1;
      }
      if (day === 2) {
        day2;
      }
      if (day === 3) {
        day3;
      }
      if (day === 4) {
        day4;
      }
      if (day === 5) {
        day5;
      }
    }

    function getHourForCreateCard() {
      section_weather.insertBefore(
        datas_div,
        section_weather.firstChild.nextSibling
      );
      datas_div.innerHTML = "";
      switch (heure) {
        case 0:
          console.log("Il est minuit.");
          if (day === 1) {
            createCard(datas, 0, 3);
          }
          if (day === 2) {
            createCard(datas, 2, 11);
          }
          if (day === 3) {
            createCard(datas, 10, 19);
          }
          if (day === 4) {
            createCard(datas, 18, 27);
          }
          if (day === 5) {
            createCard(datas, 26, 35);
          }
          break;
        case 3:
          console.log("Il est 3 heures.");
          if (day === 1) {
            createCard(datas, 0, 2);
          }
          if (day === 2) {
            createCard(datas, 1, 10);
          }
          if (day === 3) {
            createCard(datas, 9, 18);
          }
          if (day === 4) {
            createCard(datas, 17, 26);
          }
          if (day === 5) {
            createCard(datas, 25, 34);
          }
          break;
        case 6:
          if (day === 1) {
            createCard(datas, 0, 9);
          }
          if (day === 2) {
            createCard(datas, 8, 17);
          }
          if (day === 3) {
            createCard(datas, 16, 25);
          }
          if (day === 4) {
            createCard(datas, 24, 33);
          }
          if (day === 5) {
            createCard(datas, 32, 40);
          }
          break;
        case 9:
          console.log("Il est 9 heures.");
          if (day === 1) {
            createCard(datas, 0, 8);
          }
          if (day === 2) {
            createCard(datas, 7, 16);
          }
          if (day === 3) {
            createCard(datas, 15, 24);
          }
          if (day === 4) {
            createCard(datas, 23, 32);
          }
          if (day === 5) {
            createCard(datas, 31, 40);
          }
          break;
        case 12:
          console.log("Il est midi.");
          if (day === 1) {
            createCard(datas, 0, 7);
          }
          if (day === 2) {
            createCard(datas, 6, 15);
          }
          if (day === 3) {
            createCard(datas, 14, 23);
          }
          if (day === 4) {
            createCard(datas, 22, 31);
          }
          if (day === 5) {
            createCard(datas, 30, 39);
          }
          break;
        case 15:
          console.log("Il est 15 heures.");
          if (day === 1) {
            createCard(datas, 0, 6);
          }
          if (day === 2) {
            createCard(datas, 5, 14);
          }
          if (day === 3) {
            createCard(datas, 13, 22);
          }
          if (day === 4) {
            createCard(datas, 21, 30);
          }
          if (day === 5) {
            createCard(datas, 29, 38);
          }
          break;
        case 18:
          console.log("Il est 18 heures.");
          if (day === 1) {
            createCard(datas, 0, 5);
          }
          if (day === 2) {
            createCard(datas, 4, 13);
          }
          if (day === 3) {
            createCard(datas, 12, 21);
          }
          if (day === 4) {
            createCard(datas, 20, 29);
          }
          if (day === 5) {
            createCard(datas, 28, 37);
          }
          break;
        case 21:
          console.log("Il est 21 heures.");
          if (day === 1) {
            createCard(datas, 0, 4);
          }
          if (day === 2) {
            createCard(datas, 3, 12);
          }
          if (day === 3) {
            createCard(datas, 11, 20);
          }
          if (day === 4) {
            createCard(datas, 19, 28);
          }
          if (day === 5) {
            createCard(datas, 27, 36);
          }
          break;
        default:
          console.log("L'heure n'est pas dans la liste spécifiée.");
      }
      getPictureCity(city);
    }

    let previous_card = document.createElement("div");
    let next_card = document.createElement("div");
    let slider_card_select = document.createElement("div");

    previous_card.classList.add("previous_card");
    next_card.classList.add("next_card");
    slider_card_select.classList.add("slider_card_select");

    previous_card.innerHTML = `<i class="fas fa-angle-left"></i>`;
    next_card.innerHTML = `<i class="fas fa-angle-right"></i>`;
    slider_card_select.innerHTML = `
          <i class="fas fa-circle" id="1" style="background-color: white; color: white; border: 2px #0092ac solid; border-radius: 100%;"></i>
          <i class="fas fa-circle" id="2" style="background-color: white; color: white; border: 2px #0092ac solid; border-radius: 100%;"></i>
          <i class="fas fa-circle" id="3" style="background-color: white; color: white; border: 2px #0092ac solid; border-radius: 100%;"></i>
          <i class="fas fa-circle" id="4" style="background-color: white; color: white; border: 2px #0092ac solid; border-radius: 100%;"></i>
          <i class="fas fa-circle" id="5" style="background-color: white; color: white; border: 2px #0092ac solid; border-radius: 100%;"></i>
          `;

    section_weather.appendChild(previous_card);
    getHourForCreateCard();
    section_weather.appendChild(next_card);
    section_weather.appendChild(slider_card_select);

    let fa_circle = document.querySelectorAll(".fa-circle");
    function verifDay() {
      fa_circle.forEach((circle) => {
        console.log(circle.id);
        circle.addEventListener("click", () => {
          console.log(circle);
          day = parseInt(circle.id);
          getHourForCreateCard();
          for (let i = 0; i < fa_circle.length; i++) {
            const circle = fa_circle[i];
            circle.style.backgroundColor = "white";
            circle.style.color = "white";
          }
          if (parseInt(circle.id) === day) {
            circle.style.backgroundColor = "#0092ac";
            circle.style.color = "#0092ac";
            circle.style.borderColor = "#0092ac";
          }
        });

        if (parseInt(circle.id) === day) {
          for (let i = 0; i < fa_circle.length; i++) {
            const circle = fa_circle[i];
            circle.style.backgroundColor = "white";
            circle.style.color = "white";
          }
          circle.style.backgroundColor = "#0092ac";
          circle.style.color = "#0092ac";
          circle.style.borderColor = "#0092ac";
        }
      });
    }

    verifDay();

    const icon_next = next_card.querySelector("i");
    const icon_previous = previous_card.querySelector("i");

    next_card.addEventListener("click", () => {
      if (day < 5) {
        day += 1;
        console.log(day);
        getHourForCreateCard();
        if (day > 4) {
          icon_next.style.display = "none";
        }
        if (day > 1) {
          icon_previous.style.display = "block";
        }
      }
      verifDay();
    });

    if (day > 4) {
      icon_next.style.display = "none";
    }

    previous_card.addEventListener("click", () => {
      if (day > 1) {
        day -= 1;
        console.log(day);
        getHourForCreateCard();
        if (day < 2) {
          icon_previous.style.display = "none";
        }
        if (day < 5) {
          icon_next.style.display = "block";
        }
      }
    });
    if (day < 2) {
      icon_previous.style.display = "none";
    }

    return datas;
  } catch (error) {
    console.error("Erreur lors de la requête API : ", error);
    throw error;
  }
};

export { weatherData };
