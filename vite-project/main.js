import "./style.css";

const DOM = {
  btn: document.getElementById("btn"),
  form: document.getElementById("form"),
};

const menu = [
  {
    Name: "food",
    Calories: "idk",
    Image:
      "https://th.bing.com/th/id/R.c75de75b64245522b8261e73c6b3d5cb?rik=%2foQhF6Ew84NyhQ&riu=http%3a%2f%2fwww.clydefitchreport.com%2fwp-content%2fuploads%2f2012%2f08%2fchick-fil-a_meal1.jpg&ehk=D%2f%2b1OTWFrnF0hZYi6PXamS6g2WqLFqpsCh%2fkHJElb8c%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    Name: "food2",
    Calories: "idkagain",
    Image:
      "https://external-preview.redd.it/P-BXoNiHUzwokF3B5w_WiRm5bMgiHpXtQ90-ySZmayI.jpg?auto=webp&s=51012b40212b2824e0e4e16fdb2f39a75707d360",
  },
];

DOM.btn.addEventListener("click", function () {
  menu.forEach((element) => {
    DOM.form.insertAdjacentHTML(
      "beforeend",
      `
    <div class="flex">
    <img src="${element.Image}"><img>
     <h1>${element.Name}</h1>
     <h2>${element.Calories}</h2>
    </div>
    `
    );
  });
});
