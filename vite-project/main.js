import "./style.css";
import { menu } from "./array";

const DOM = {
  btn: document.getElementById("btn"),
  form: document.getElementById("form"),
};

DOM.btn.addEventListener("click", function () {
  menu.forEach((element) => {
    DOM.form.innerHTML = `
      <section class="Parent">
    <div class="Child">
    <img src="${element.Image}" class="IMG"><img>
     <h1>${element.Name}</h1>
     <h2>${element.Calories}</h2>
    </div>
    </section>
    `;
  });
});
