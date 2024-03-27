/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { ConcatenationScope } from "webpack";

let pron = ["the", "our"];
let adj = [
  "great",
  "big",
  "one and only",
  "amazing",
  "incredible",
  "spectacular"
];
let nom = ["backery", "bread house", "bread machine", "gluten cave"];

for (let i = 0; i < pron.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < nom.lenght; k++) {
      console.log(`${pron[i]}$(adj[j])$(nom[k]).com`);
    }
  }
}
