import "./style.css";
import { menu } from "./array";
import { DOM } from "./DOM";

DOM.drinksbtn.addEventListener("click", function () {
  drinkpage();
});

function drinkpage() {
  menu.forEach((element) => {
    DOM.MenuPage.innerHTML = `<div>
    <h1>${element.Name}</h1>
    <h1>${element.Price}</h1>
    </div>`;
  });
}
