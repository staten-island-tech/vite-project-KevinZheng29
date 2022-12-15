import "../styles/Heading.css";
import "../styles/MenuPage.css";
import "../styles/Other.css";
import { menu } from "../js/array";
import { DOM } from "../js/DOM";

menu.forEach((menu) =>
  DOM.MenuPage.insertAdjacentHTML(
    "beforeend",
    `
<div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
`
  )
);

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
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
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
          
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          
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
          
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          
          `
        )
      );
    menu
      .filter((menu) => menu.Type === "Dessert")
      .forEach((menu) =>
        DOM.MenuPage.insertAdjacentHTML(
          "beforeend",
          `
          
              <div class="Child">
                  <img class="IMG" src="${menu.IMG}"><img>
                   <h1 class="CardName">${menu.Name}</h1>
                   <h2 class="CardPrice">$${menu.Price}</h2>
              </div>
          
          `
        )
      );
  },
};
