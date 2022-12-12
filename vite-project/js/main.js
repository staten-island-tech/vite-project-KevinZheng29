import "../styles/style.css";
import { menu } from "../js/array";
import { DOM } from "../js/DOM";

DOM.jpbtn.addEventListener("click", function () {
  DOM.MenuPage.innerHTML = "";
  ShowMenu.JPMENU();
});

DOM.krbtn.addEventListener("click", function () {
  DOM.MenuPage.innerHTML = "";
  ShowMenu.KRMENU();
});

DOM.othersbtn.addEventListener("click", function () {
  DOM.MenuPage.innerHTML = "";
  ShowMenu.OTHERMENU();
});

const ShowMenu = {
  JPMENU: function () {
    menu
      .filter((menu) => menu.Nationality === "Japanese")
      .filter((menu) => menu.Type === "Food")
      .forEach((menu) =>
        DOM.MenuPage.insertAdjacentHTML(
          "beforeend",
          `
          <container class="Parent">
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          </container>
          `
        )
      );
  },
  KRMENU: function () {
    menu
      .filter((menu) => menu.Nationality === "Korean")
      .filter((menu) => menu.Type === "Food")
      .forEach((menu) =>
        DOM.MenuPage.insertAdjacentHTML(
          "beforeend",
          `
          <container class="Parent">
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          </container>
          `
        )
      );
  },
  OTHERMENU: function () {
    menu
      .filter((menu) => menu.Type === "Drink")
      .forEach((menu) =>
        DOM.MenuPage.insertAdjacentHTML(
          "beforeend",
          `
          <container class="Parent">
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          </container>
          `
        )
      );
    menu
      .filter((menu) => menu.Type === "Dessert")
      .forEach((menu) =>
        DOM.MenuPage.insertAdjacentHTML(
          "beforeend",
          `
          <container class="Parent">
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          </container>
          `
        )
      );
  },
};
