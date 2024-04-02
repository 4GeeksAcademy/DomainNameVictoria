/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adjective = [
    "great",
    "big",
    "one and only",
    "amazing",
    "incredible",
    "spectacular"
  ];
  let noun = ["backery", "breadhouse", "breadmachine", "glutencave"];

  let textOf = '<ul class="list-group list-group-flush">';
  textOf += '<li class="list-group-item bg-dark text-white">Options</li>';

  for (const iterator of pronoun) {
    for (const item of adjective) {
      for (const element of noun) {
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
