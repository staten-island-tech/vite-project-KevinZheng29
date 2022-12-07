import "./style.css";
import { menu } from "./array";
import { DOM } from "./DOM";

menu
  .filter((data) => data.Type === "SideDish")
  .forEach((data) => {
    console.log(data.Name);
  });

menu
  .filter((data) => data.Type === "MainDish")
  .forEach((data) => {
    console.log(data.Name);
  });

menu
  .filter((data) => data.Type === "Other")
  .forEach((data) => {
    console.log(data.Name);
  });
