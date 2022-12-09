import "./style.css";
import { menu } from "./array";
import { DOM } from "./DOM";

menu
  .filter((data) => data.Nationality === "Japanese")
  .forEach((data) => {
    console.log(data.Name);
  });

menu
  .filter((data) => data.Nationality === "Korean")
  .forEach((data) => {
    console.log(data.Name);
  });

menu
  .filter((data) => data.Type === "Other")
  .forEach((data) => {
    console.log(data.Name);
  });

DOM.jpbtn.addEventListener("click", function () {
  DOM.MenuPage.innerHTML = "";
  ShowMenu.JPMENU();
});

const ShowMenu = {
  JPMENU: function () {
    menu
      .filter((menu) => menu.Nationality === "Japanese")
      .forEach((menu) =>
        DOM.MenuPage.insertAdjacentHTML(
          "beforeend",
          `
          <div class="MenuPage"></div>
          <div class="Child">
          <img class="IMG" src="${menu.IMG}"><img>
          <h1 class="CardName">${menu.Name}</h1>
          <h2 class="CardPrice">${menu.Price}</h2>
        </div>
        <div>`
        )
      );
  },
};
