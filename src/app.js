/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("hola mundo");

  let pron = ["the", "our"];
  let adj = [
    "great",
    "big",
    "one and only",
    "amazing",
    "incredible",
    "spectacular"
  ];
  let nom = ["backery", "breadhouse", "breadmachine", "glutencave"];

  let textOf = '<ul class="list-group">';
  textOf += '<li class="list-group-item bg-success text-light">Options</li>';

  for (const iterator of pron) {
    for (const item of adj) {
      for (const element of nom) {
        textOf += `
          <li class="list-group-item">
            ${iterator}${item}${element}.com
          </li>`;
      }
    }
  }
  textOf += "</ul>";
  document.querySelector("#for").innerHTML = textOf;
};
